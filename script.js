// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    displayQuestions(questions);
    updateQuestionCount(questions.length);
    
    // Event listeners
    document.getElementById('searchBox').addEventListener('input', filterQuestions);
    document.getElementById('categoryFilter').addEventListener('change', filterQuestions);
    document.getElementById('clearFilters').addEventListener('click', clearFilters);
});

// Display questions
function displayQuestions(questionsToShow) {
    const container = document.getElementById('questionsList');
    container.innerHTML = '';
    
    questionsToShow.forEach(q => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question-item';
        questionDiv.innerHTML = `
            <div class="question-header">
                <span class="question-number">Question ${q.id}</span>
                <span class="question-category">${formatCategory(q.category)}</span>
            </div>
            <p class="question-text">${q.question}</p>
            <div class="question-meta">
                <span>Section ${q.section}</span>
                <span>Page ${q.page}</span>
            </div>
        `;
        container.appendChild(questionDiv);
    });
}

// Filter questions
function filterQuestions() {
    const searchTerm = document.getElementById('searchBox').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryFilter').value;
    
    let filtered = questions;
    
    // Filter by category
    if (selectedCategory) {
        filtered = filtered.filter(q => q.category === selectedCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
        filtered = filtered.filter(q => 
            q.question.toLowerCase().includes(searchTerm) ||
            q.id.toString().includes(searchTerm)
        );
    }
    
    displayQuestions(filtered);
    updateQuestionCount(filtered.length);
}

// Clear filters
function clearFilters() {
    document.getElementById('searchBox').value = '';
    document.getElementById('categoryFilter').value = '';
    displayQuestions(questions);
    updateQuestionCount(questions.length);
}

// Update question count
function updateQuestionCount(count) {
    document.getElementById('questionCount').textContent = 
        `Showing ${count} of ${questions.length} questions`;
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
