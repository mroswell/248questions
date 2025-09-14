# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static website that presents 248 scientific questions to the FDA regarding COVID-19 vaccine manufacturing, safety testing, and regulatory oversight. The site provides an interactive searchable database of these questions.

## Development Commands

### Running the Application
```bash
# Start a local development server (Python 3)
python3 -m http.server 8000

# Then open http://localhost:8000 in your browser
```

## Architecture

### File Structure
- **index.html**: Main HTML page with semantic structure for header, questions display, and download section
- **questions.js**: Contains the `questions` array with all 248 questions as JavaScript objects
- **script.js**: Application logic for filtering, searching, and displaying questions
- **style.css**: Styling for the application

### Data Model
Each question object in `questions.js` contains:
- `id`: Unique identifier
- `category`: Main category (manufacturing, dna, safety, regulatory, genotoxicity, biodistribution, frameshift)
- `subcategory`: Optional sub-categorization
- `question`: The actual question text
- `page`: Page reference in the source document
- `section`: Section reference in the source document

### Key Functionality
The application provides:
1. **Dynamic Question Display**: Questions are rendered dynamically from the JavaScript array
2. **Search**: Real-time filtering by question text or ID
3. **Category Filtering**: Dropdown filter for specific question categories
4. **Question Counter**: Shows filtered vs total questions

### Frontend Interaction Flow
1. On page load, `script.js` initializes by displaying all questions
2. User interactions (search, filter) trigger `filterQuestions()` which:
   - Filters the questions array based on search term and/or category
   - Re-renders the filtered questions
   - Updates the question count display