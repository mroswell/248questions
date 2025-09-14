// Pagination state
let currentPage = 1;
let questionsPerPage = -1; // Default to show all
let filteredQuestions = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    // Only run on pages with the questions list
    if (!document.getElementById('questionsList')) {
        return;
    }

    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const questionId = urlParams.get('q'); // Get specific question ID from URL

    // If there's a question ID, we should show all questions and clear filters
    if (questionId) {
        // Force show all questions when linking to a specific question
        questionsPerPage = -1;
        currentPage = 1;

        // Clear any filters to ensure the question is visible
        if (document.getElementById('searchBox')) {
            document.getElementById('searchBox').value = '';
        }
        if (document.getElementById('categoryFilter')) {
            document.getElementById('categoryFilter').value = '';
        }
        if (document.getElementById('perPageFilter')) {
            document.getElementById('perPageFilter').value = 'all';
        }
    } else {
        // Normal parameter handling when not linking to a specific question
        currentPage = parseInt(urlParams.get('page')) || 1;
        const perPageParam = urlParams.get('perPage');
        questionsPerPage = perPageParam ? parseInt(perPageParam) : -1; // Default to -1 (show all) if not specified

        // Set initial filter values from URL
        const searchParam = urlParams.get('search');
        const categoryParam = urlParams.get('category');

        if (searchParam && document.getElementById('searchBox')) {
            document.getElementById('searchBox').value = searchParam;
        }
        if (categoryParam && document.getElementById('categoryFilter')) {
            document.getElementById('categoryFilter').value = categoryParam;
        }
        if (document.getElementById('perPageFilter')) {
            document.getElementById('perPageFilter').value = questionsPerPage === -1 ? 'all' : questionsPerPage;
        }
    }

    // Initial display
    filterQuestions();

    // If there's a specific question ID, scroll to it after rendering
    if (questionId) {
        // Wait for the next animation frame to ensure DOM is ready
        requestAnimationFrame(() => {
            // Give a bit more time for all questions to render
            setTimeout(() => {
                const element = document.getElementById(`question-${questionId}`);
                console.log(`Looking for question-${questionId}`, element);

                if (element) {
                    // Get the position of the element
                    const rect = element.getBoundingClientRect();
                    const absoluteTop = window.pageYOffset + rect.top;

                    // Scroll to the element with offset
                    window.scrollTo({
                        top: absoluteTop - 20,
                        behavior: 'smooth'
                    });

                    // Highlight the question briefly
                    element.classList.add('highlight');
                    setTimeout(() => element.classList.remove('highlight'), 3000);
                } else {
                    console.error(`Question ${questionId} not found. Available questions:`,
                        Array.from(document.querySelectorAll('[id^="question-"]')).map(el => el.id));
                }
            }, 300);
        });
    }

    // Event listeners
    if (document.getElementById('searchBox')) {
        document.getElementById('searchBox').addEventListener('input', handleFilterChange);
    }
    if (document.getElementById('categoryFilter')) {
        document.getElementById('categoryFilter').addEventListener('change', handleFilterChange);
    }
    if (document.getElementById('perPageFilter')) {
        document.getElementById('perPageFilter').addEventListener('change', handlePerPageChange);
    }
    if (document.getElementById('clearFilters')) {
        document.getElementById('clearFilters').addEventListener('click', clearFilters);
    }
});

// Handle filter changes
function handleFilterChange() {
    currentPage = 1; // Reset to first page when filters change
    filterQuestions();
}

// Handle per page change
function handlePerPageChange() {
    const value = document.getElementById('perPageFilter').value;
    questionsPerPage = value === 'all' ? -1 : parseInt(value);
    currentPage = 1;
    filterQuestions();
}

// Filter questions
function filterQuestions() {
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryFilter').value;

    filteredQuestions = questions;

    // Filter by category
    if (selectedCategory) {
        filteredQuestions = filteredQuestions.filter(q => q.category === selectedCategory);
    }

    // Filter by search term
    if (searchTerm) {
        filteredQuestions = filteredQuestions.filter(q =>
            q.question.toLowerCase().includes(searchTerm) ||
            q.id.toString().includes(searchTerm)
        );
    }

    displayPaginatedQuestions();
    updateURL();
}

// Display paginated questions
function displayPaginatedQuestions() {
    const container = document.getElementById('questionsList');
    container.innerHTML = '';

    let questionsToShow;
    if (questionsPerPage === -1) {
        // Show all questions
        questionsToShow = filteredQuestions;
    } else {
        // Calculate pagination
        const startIndex = (currentPage - 1) * questionsPerPage;
        const endIndex = startIndex + questionsPerPage;
        questionsToShow = filteredQuestions.slice(startIndex, endIndex);
    }

    // Display questions
    questionsToShow.forEach(q => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        questionDiv.id = `question-${q.id}`; // Add ID for anchoring

        // Process the question text to convert Question references to links
        const processedQuestion = linkifyQuestionReferences(q.question);

        questionDiv.innerHTML = `
            <div class="question-header">
                <span class="question-number">
                    <a href="?q=${q.id}" class="question-link" title="Link to Question ${q.id}">Question ${q.id}</a>
                </span>
                <span class="question-category" data-category="${q.category}">${formatCategory(q.category)}</span>
            </div>
            <p class="question-text">${processedQuestion}</p>
            <div class="question-meta">
                <span>Section ${q.section}</span>
                <span>Page ${q.page}</span>
            </div>
        `;
        container.appendChild(questionDiv);
    });

    updateQuestionCount();
    renderPagination();
}

// Update question count display
function updateQuestionCount() {
    const countElement = document.getElementById('questionCount');
    const totalFiltered = filteredQuestions.length;

    if (questionsPerPage === -1) {
        countElement.textContent = `Showing all ${totalFiltered} of ${questions.length} questions`;
    } else {
        const startIndex = (currentPage - 1) * questionsPerPage + 1;
        const endIndex = Math.min(startIndex + questionsPerPage - 1, totalFiltered);

        if (totalFiltered === 0) {
            countElement.textContent = 'No questions found';
        } else {
            countElement.textContent = `Showing ${startIndex}-${endIndex} of ${totalFiltered} questions`;
        }
    }
}

// Render pagination controls
function renderPagination() {
    const paginationDiv = document.getElementById('pagination');
    paginationDiv.innerHTML = '';

    if (questionsPerPage === -1 || filteredQuestions.length <= questionsPerPage) {
        return; // No pagination needed
    }

    const totalPages = Math.ceil(filteredQuestions.length / questionsPerPage);

    // Previous button
    const prevButton = document.createElement('button');
    prevButton.textContent = '← Previous';
    prevButton.className = 'pagination-btn';
    prevButton.disabled = currentPage === 1;
    prevButton.onclick = () => goToPage(currentPage - 1);
    paginationDiv.appendChild(prevButton);

    // Page numbers
    const pageNumbers = document.createElement('div');
    pageNumbers.className = 'page-numbers';

    // Determine which page numbers to show
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, currentPage + 2);

    // Show first page if not visible
    if (startPage > 1) {
        addPageButton(pageNumbers, 1);
        if (startPage > 2) {
            const dots = document.createElement('span');
            dots.textContent = '...';
            dots.className = 'pagination-dots';
            pageNumbers.appendChild(dots);
        }
    }

    // Show page range
    for (let i = startPage; i <= endPage; i++) {
        addPageButton(pageNumbers, i);
    }

    // Show last page if not visible
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const dots = document.createElement('span');
            dots.textContent = '...';
            dots.className = 'pagination-dots';
            pageNumbers.appendChild(dots);
        }
        addPageButton(pageNumbers, totalPages);
    }

    paginationDiv.appendChild(pageNumbers);

    // Next button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next →';
    nextButton.className = 'pagination-btn';
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = () => goToPage(currentPage + 1);
    paginationDiv.appendChild(nextButton);
}

// Add a page number button
function addPageButton(container, pageNum) {
    const button = document.createElement('button');
    button.textContent = pageNum;
    button.className = 'page-btn';
    if (pageNum === currentPage) {
        button.classList.add('active');
    }
    button.onclick = () => goToPage(pageNum);
    container.appendChild(button);
}

// Navigate to a specific page
function goToPage(page) {
    currentPage = page;
    displayPaginatedQuestions();
    updateURL();
    // Scroll to top of questions section
    document.getElementById('questions').scrollIntoView({ behavior: 'smooth' });
}

// Update URL with current state
function updateURL() {
    const params = new URLSearchParams();

    // Check if there's a question parameter in the current URL
    const currentParams = new URLSearchParams(window.location.search);
    const questionId = currentParams.get('q');

    // Keep the question parameter if it exists
    if (questionId) {
        params.set('q', questionId);
    }

    if (currentPage > 1) {
        params.set('page', currentPage);
    }
    if (questionsPerPage !== 75 && questionsPerPage !== -1) {
        params.set('perPage', questionsPerPage);
    }

    const searchTerm = document.getElementById('searchBox').value;
    if (searchTerm) {
        params.set('search', searchTerm);
    }

    const category = document.getElementById('categoryFilter').value;
    if (category) {
        params.set('category', category);
    }

    const newURL = params.toString() ? `?${params.toString()}` : window.location.pathname;
    window.history.replaceState({}, '', newURL);
}

// Clear filters
function clearFilters() {
    // Preserve the question parameter if it exists
    const currentParams = new URLSearchParams(window.location.search);
    const questionId = currentParams.get('q');

    document.getElementById('searchBox').value = '';
    document.getElementById('categoryFilter').value = '';
    document.getElementById('perPageFilter').value = 'all';
    questionsPerPage = -1;
    currentPage = 1;
    filterQuestions();

    // If there was a question parameter, make sure it stays in the URL
    if (questionId) {
        const params = new URLSearchParams();
        params.set('q', questionId);
        window.history.replaceState({}, '', `?${params.toString()}`);
    }
}

// Format category name
function formatCategory(category) {
    const categoryNames = {
        'manufacturing': 'Manufacturing',
        'dna': 'DNA Contamination',
        'safety': 'Safety Studies',
        'regulatory': 'Regulatory',
        'genotoxicity': 'Genotoxicity',
        'biodistribution': 'Biodistribution',
        'frameshift': 'Frameshift Proteins'
    };
    return categoryNames[category] || category;
}

// Convert Question references in text to clickable links
function linkifyQuestionReferences(text) {
    // Escape HTML first to prevent XSS
    const escapeHtml = (str) => {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    };

    const escapedText = escapeHtml(text);

    // Replace "Question X" or "Questions X, Y, Z" with links
    // Matches patterns like: Question 156, Questions 1-5, Question 2 and 3, etc.
    return escapedText.replace(/\bQuestions?\s+(\d+(?:\s*(?:,|and|&|-|through|to)\s*\d+)*)/gi, (match, numbers) => {
        // For simple cases like "Question 156"
        const simpleMatch = match.match(/^Questions?\s+(\d+)$/i);
        if (simpleMatch) {
            const id = simpleMatch[1];
            return `<a href="?q=${id}" class="question-ref" title="Go to Question ${id}">${match}</a>`;
        }
        // For complex cases, just return the match as-is (could be enhanced later)
        return match;
    });
}
