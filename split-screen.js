// State management
let filteredQuestions = [];
let allQuestions = questions; // From questions.js

// Process question text for split screen - handles footnotes
function processQuestionTextForSplitScreen(text) {
    // First, handle "section X.Y.Z" patterns outside parentheses
    let processed = text.replace(/\bsection\s+(\d+(?:\.\d+)*)\b/gi, (match, sectionNum) => {
        return `section __SREF_${sectionNum}__`;
    });

    // Process footnote references with tokens to preserve them through HTML escaping
    processed = processed.replace(/\(([^)]+)\)/g, (match, content) => {
        // Skip if content starts with common non-footnote patterns, but handle "see" with section numbers
        if (/^(p\s*\d|page|section|eg|e\.g\.|i\.e\.|cf|note|table|figure|\d{4})/i.test(content)) {
            return match;
        }

        // Handle "see" with section numbers like "see 11.1" - use token replacement
        if (/^see\s+(\d+(?:\.\d+)*)$/i.test(content.trim())) {
            const sectionMatch = content.match(/^see\s+(\d+(?:\.\d+)*)$/i);
            if (sectionMatch) {
                const sectionNum = sectionMatch[1];
                return `(see __SREF_${sectionNum}__)`;
            }
        }

        // Handle "section" with section numbers like "section 3.6" - use token replacement
        if (/^section\s+(\d+(?:\.\d+)*)$/i.test(content.trim())) {
            const sectionMatch = content.match(/^section\s+(\d+(?:\.\d+)*)$/i);
            if (sectionMatch) {
                const sectionNum = sectionMatch[1];
                return `(section __SREF_${sectionNum}__)`;
            }
        }

        // Skip if it contains URLs or email patterns
        if (/https?:\/\/|www\.|@/.test(content)) {
            return match;
        }

        // Skip if it's a date pattern
        if (/^(january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{4}$/i.test(content)) {
            return match;
        }

        // Skip if it's a scientific notation or chemical formula
        if (/[A-Z]{2,}|µg|mg|ml|nm|\d+x\d+/.test(content)) {
            return match;
        }

        // Process if it looks like footnote numbers
        if (/^\d+(?:\s*,\s*\d+)*(?:\s*-\s*\d+)?$/.test(content.trim())) {
            const parts = content.split(/,/).map(s => s.trim());
            const linked = parts.map(part => {
                if (part.includes('-')) {
                    const [start, end] = part.split('-').map(s => s.trim());
                    return `__FREF_${start}__-__FREF_${end}__`;
                }
                return `__FREF_${part}__`;
            }).join(', ');
            return '(' + linked + ')';
        }

        return match;
    });

    // Escape HTML
    const div = document.createElement('div');
    div.textContent = processed;
    let escaped = div.innerHTML;

    // Replace tokens with actual links
    escaped = escaped.replace(/__FREF_(\d+)__/g, (match, refNum) => {
        return `<a href="#" onclick="scrollToReference(${refNum}); return false;" class="footnote-ref" title="Go to reference ${refNum}">${refNum}</a>`;
    });

    // Replace section reference tokens with actual links
    escaped = escaped.replace(/__SREF_([^_]+)__/g, (match, sectionNum) => {
        return `<a href="#" onclick="scrollToSection('${sectionNum}'); return false;" class="section-ref" title="Go to section ${sectionNum}">${sectionNum}</a>`;
    });

    return escaped;
}

// Convert footnote references in parentheses to clickable links (kept for compatibility)
function linkifyFootnotes(text) {
    // Process parentheses content
    return text.replace(/\(([^)]+)\)/g, (match, content) => {
        // Skip if content starts with common non-footnote patterns
        if (/^(p\s*\d|page|section|eg|e\.g\.|i\.e\.|see|cf|note|table|figure|\d{4})/i.test(content)) {
            return match;
        }

        // Skip if it contains URLs or email patterns
        if (/https?:\/\/|www\.|@/.test(content)) {
            return match;
        }

        // Skip if it's a date pattern (e.g., "December 2020", "2021")
        if (/^(january|february|march|april|may|june|july|august|september|october|november|december)\s+\d{4}$/i.test(content)) {
            return match;
        }

        // Skip if it's a scientific notation or chemical formula
        if (/[A-Z]{2,}|µg|mg|ml|nm|\d+x\d+/.test(content)) {
            return match;
        }

        // Process if it looks like footnote numbers
        if (/^\d+(?:\s*,\s*\d+)*(?:\s*-\s*\d+)?$/.test(content.trim())) {
            return '(' + processFootnoteNumbers(content) + ')';
        }

        // Process mixed content like "eg (23,24)" - extract just the numbers
        const nestedMatch = content.match(/\((\d+(?:\s*,\s*\d+)*(?:\s*-\s*\d+)?)\)/);
        if (nestedMatch) {
            const beforeNested = content.substring(0, content.indexOf('('));
            const afterNested = content.substring(content.indexOf(')') + 1);
            return '(' + beforeNested + '(' + processFootnoteNumbers(nestedMatch[1]) + ')' + afterNested + ')';
        }

        return match;
    });
}

// Helper function to process footnote numbers and create links
function processFootnoteNumbers(numbersStr) {
    const parts = numbersStr.split(/,/).map(s => s.trim());

    return parts.map(part => {
        // Handle ranges like "96-98"
        if (part.includes('-')) {
            const [start, end] = part.split('-').map(s => s.trim());
            return `<a href="#" onclick="scrollToReference(${start}); return false;" class="footnote-ref" title="Go to reference ${start}">${start}</a>-<a href="#" onclick="scrollToReference(${end}); return false;" class="footnote-ref" title="Go to reference ${end}">${end}</a>`;
        }
        // Single number
        return `<a href="#" onclick="scrollToReference(${part}); return false;" class="footnote-ref" title="Go to reference ${part}">${part}</a>`;
    }).join(', ');
}

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

    // Setup iframe load handler for injecting navigation script
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
                    console.log('Iframe received message:', event.data);
                    if (event.data.type === 'scrollToReference') {
                        console.log('Looking for element with id: ref-' + event.data.refNumber);
                        // Find the reference element by ID - always prioritize the bibliography section
                        const allRefs = document.querySelectorAll('#ref-' + event.data.refNumber);
                        let refElement = null;
                        
                        if (allRefs.length > 0) {
                            // Always use the last occurrence (bibliography section)
                            refElement = allRefs[allRefs.length - 1];
                            console.log('Found ' + allRefs.length + ' references, using the last one (bibliography)');
                        }
                        
                        console.log('Found element:', refElement);

                        if (refElement) {
                            refElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center'
                            });

                            // Highlight the reference briefly
                            const originalBg = refElement.style.backgroundColor;
                            refElement.style.backgroundColor = '#ffeb3b';
                            setTimeout(() => {
                                refElement.style.backgroundColor = originalBg;
                            }, 2000);
                        } else {
                            console.log('Reference element not found for ref-' + event.data.refNumber);
                        }
                    } else if (event.data.type === 'scrollToSection') {
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
                    } else if (event.data.type === 'scrollToQuestion') {
                        // Find the question link in the document
                        const questionLinks = document.querySelectorAll('.question-link');
                        let targetElement = null;

                        for (let link of questionLinks) {
                            if (link.getAttribute('data-question-id') === String(event.data.questionId)) {
                                targetElement = link;
                                break;
                            }
                        }

                        if (targetElement) {
                            targetElement.scrollIntoView({
                                behavior: 'smooth',
                                block: 'center'
                            });

                            // Send message back to parent to highlight question
                            if (!event.data.fromLeftPanel) {
                                window.parent.postMessage({
                                    type: 'scrollToQuestion',
                                    questionId: event.data.questionId
                                }, '*');
                            }
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
                <div class="question-text">${processQuestionTextForSplitScreen(q.question)}</div>
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

// Scroll to a reference in the document
function scrollToReference(refNumber) {
    console.log('scrollToReference called with:', refNumber);
    const iframe = document.getElementById('documentFrame');

    // Send message to iframe to scroll to reference
    iframe.contentWindow.postMessage({
        type: 'scrollToReference',
        refNumber: refNumber
    }, '*');
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

