// State management
let filteredQuestions = [];
let allQuestions = questions; // From questions.js

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const searchParam = urlParams.get('search');
    const categoryParam = urlParams.get('category');
    const questionId = urlParams.get('q');

    // Set initial filter values from URL
    if (searchParam && document.getElementById('searchBox')) {
        document.getElementById('searchBox').value = searchParam;
    }
    if (categoryParam && document.getElementById('categoryFilter')) {
        document.getElementById('categoryFilter').value = categoryParam;
    }

    displayQuestions();
    setupEventListeners();
    updateQuestionCount();

    // Setup message listener for cross-frame communication
    window.addEventListener('message', handleDocumentMessage);

    // If there's a specific question ID, scroll to it after a short delay
    if (questionId) {
        setTimeout(() => {
            const questionElement = document.getElementById(`question-${questionId}`);
            if (questionElement) {
                questionElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
                questionElement.classList.add('highlighted');
            }
        }, 100);
    }
});

// Display questions in the left panel
function displayQuestions() {
    const questionsList = document.getElementById('questionsList');
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    const categoryFilter = document.getElementById('categoryFilter').value;

    // Filter questions
    filteredQuestions = allQuestions.filter(q => {
        const matchesSearch = !searchTerm ||
            q.question.toLowerCase().includes(searchTerm) ||
            q.id.toString().includes(searchTerm);
        const matchesCategory = !categoryFilter || q.category === categoryFilter;
        return matchesSearch && matchesCategory;
    });

    // Build HTML for filtered questions
    const html = filteredQuestions.map(q => {
        return `
            <div class="question-item" id="question-${q.id}">
                <div class="question-header">
                    <a href="#" onclick="scrollToQuestion(${q.id}); return false;" class="question-number-link">
                        <strong>Question ${q.id}:</strong>
                    </a>
                    <span class="question-category" data-category="${q.category}">${q.category}</span>
                </div>
                <div class="question-text">${q.question}</div>
                <div class="question-meta">
                    ${q.section ? `<span class="section-link" onclick="scrollToSection('${q.section}', ${q.id})">Section ${q.section}</span>` : ''}
                    ${q.section ? `<span class="section-link" onclick="scrollToQuestion(${q.id})">Q${q.id}</span>` : ''}
                    ${q.page ? `<span>Page ${q.page}</span>` : ''}
                </div>
            </div>
        `;
    }).join('');

    questionsList.innerHTML = html;
    updateQuestionCount();
}

// Scroll to section in the document
function scrollToSection(section, questionId) {
    const iframe = document.getElementById('documentFrame');

    // Send message to iframe to scroll to section
    // Handle both 2-part (4.3) and 3-part (4.3.1) section numbers
    iframe.contentWindow.postMessage({
        type: 'scrollToSection',
        section: section,
        questionId: questionId
    }, '*');

    // Highlight the question in the left panel
    highlightQuestion(questionId);
}

// Scroll to a specific question in the document
function scrollToQuestion(questionId) {
    const iframe = document.getElementById('documentFrame');

    // Send message to iframe to scroll to the question
    iframe.contentWindow.postMessage({
        type: 'scrollToQuestion',
        questionId: questionId,
        fromLeftPanel: true
    }, '*');

    // Highlight the question in the left panel
    highlightQuestion(questionId);
}

// Highlight a question in the left panel
function highlightQuestion(questionId) {
    // Remove existing highlights
    document.querySelectorAll('.question-item.highlighted').forEach(el => {
        el.classList.remove('highlighted');
    });

    // Add highlight to target question
    const questionElement = document.getElementById(`question-${questionId}`);
    if (questionElement) {
        questionElement.classList.add('highlighted');

        // Scroll the question into view in the left panel
        questionElement.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// Handle messages from the document iframe
function handleDocumentMessage(event) {
    if (event.data.type === 'scrollToQuestion' && !event.data.fromLeftPanel) {
        const questionId = event.data.questionId;

        // Clear any filters to ensure question is visible
        document.getElementById('searchBox').value = '';
        document.getElementById('categoryFilter').value = '';

        // Re-display all questions
        displayQuestions();

        // Highlight and scroll to the question
        highlightQuestion(questionId);
    }
}

// Update question count display
function updateQuestionCount() {
    const countElement = document.getElementById('questionCount');
    const total = allQuestions.length;
    const shown = filteredQuestions.length;

    if (shown === total) {
        countElement.textContent = `Showing all ${total} questions`;
    } else {
        countElement.textContent = `Showing ${shown} of ${total} questions`;
    }
}

// Update URL with current filter parameters
function updateURLParams() {
    const searchValue = document.getElementById('searchBox').value;
    const categoryValue = document.getElementById('categoryFilter').value;

    const params = new URLSearchParams();

    if (searchValue) {
        params.set('search', searchValue);
    }
    if (categoryValue) {
        params.set('category', categoryValue);
    }

    // Update URL without reloading the page
    const newURL = params.toString()
        ? `${window.location.pathname}?${params.toString()}`
        : window.location.pathname;

    window.history.replaceState({}, '', newURL);
}

// Setup event listeners
function setupEventListeners() {
    // Search box
    document.getElementById('searchBox').addEventListener('input', function() {
        displayQuestions();
        updateURLParams();
    });

    // Category filter
    document.getElementById('categoryFilter').addEventListener('change', function() {
        displayQuestions();
        updateURLParams();
    });

    // Clear filters button
    document.getElementById('clearFilters').addEventListener('click', function() {
        document.getElementById('searchBox').value = '';
        document.getElementById('categoryFilter').value = '';
        displayQuestions();
        updateURLParams();
    });
}

// Wait for iframe to load and inject navigation script
document.addEventListener('DOMContentLoaded', function() {
    const iframe = document.getElementById('documentFrame');

    iframe.addEventListener('load', function() {
        // Inject navigation script into the document
        try {
            const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;

            // Create and inject the navigation script
            const script = iframeDoc.createElement('script');
            script.textContent = `
                // Listen for scroll requests from parent
                window.addEventListener('message', function(event) {
                    if (event.data.type === 'scrollToSection') {
                        // Find all h2, h3, h4 elements that might contain the section number
                        const headings = document.querySelectorAll('h1, h2, h3, h4');
                        let targetElement = null;

                        for (let heading of headings) {
                            // Check if heading text contains the section number
                            if (heading.textContent.includes(event.data.section)) {
                                targetElement = heading;
                                break;
                            }
                        }

                        // If not found in headings, search in strong tags
                        if (!targetElement) {
                            const strongs = document.querySelectorAll('strong');
                            for (let strong of strongs) {
                                if (strong.textContent.includes(event.data.section)) {
                                    targetElement = strong;
                                    break;
                                }
                            }
                        }

                        if (targetElement) {
                            targetElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start'
                            });

                            // Highlight the section briefly
                            const originalBg = targetElement.style.backgroundColor;
                            targetElement.style.backgroundColor = '#ffeb3b';
                            setTimeout(() => {
                                targetElement.style.backgroundColor = originalBg;
                            }, 2000);
                        }
                    }
                });

                // Handle clicks on Q{num} links
                document.addEventListener('click', function(event) {
                    if (event.target.classList.contains('question-link')) {
                        event.preventDefault();
                        const questionId = event.target.getAttribute('data-question-id');

                        // Send message to parent to highlight question
                        window.parent.postMessage({
                            type: 'scrollToQuestion',
                            questionId: parseInt(questionId)
                        }, '*');
                    }
                });
            `;
            iframeDoc.body.appendChild(script);
        } catch (e) {
            console.log('Could not inject script into iframe - likely due to same-origin policy');
        }
    });
});