# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This repository contains two related projects for learning web publishing (UI development):

1. **training-sets/** - Vanilla HTML/CSS/JS training examples (100 exercises)
2. **training-sets-react/** - React-based viewer application for the training examples

Both projects share the same example data structure and design system.

## Development Commands

### Training Sets (Vanilla)
```bash
# Generate all 100 example folders with A-guide.html, B-practice.html, and C-answer.html files
# This now automatically uses custom-guide-data-full.js for enhanced guides
cd training-sets
node generate-examples.js

# Open in browser (no build step needed)
# Simply open training-sets/index.html in a browser
```

### Training Sets React
```bash
cd training-sets-react

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Architecture

### Vanilla Project Structure (training-sets/)

The vanilla project is a static HTML/CSS/JS learning platform:

- **generate-examples.js** - Node.js script that auto-generates all 100 example folders (now integrated with custom guide data)
- **generate-answer-templates.js** - Helper module that generates default answer templates by category
- **custom-guide-data-full.js** - Rich, example-specific guide data with detailed requirements, step-by-step implementations, and custom checklists for all 100 examples
- **assets/js/examples-data.js** - Single source of truth for all 100 examples (array of objects)
- **assets/js/main.js** - Main JavaScript for index.html filtering and display
- **assets/css/common.css** - Shared styles across guide pages
- **S001/ through S100/** - Auto-generated folders, each containing:
  - **A-guide.html** - Learning guide with requirements, style guide, and checklist (enhanced with custom data)
  - **B-practice.html** - Practice file with starter template and hints
  - **C-answer.html** - Complete working solution with full HTML/CSS/JS implementation

**Key Pattern**: The examples are NOT manually created. They're generated from `examplesData` array in `generate-examples.js`. To add/modify examples:
1. Edit the `examplesData` array in `generate-examples.js`
2. (Optional) Add detailed custom guide data for the example in `custom-guide-data-full.js`
3. Run `node generate-examples.js` to regenerate all files
4. The script uses templates (`generateGuideHTML`, `generatePracticeHTML`, and `generateAnswerHTML` functions) to create consistent structure
5. Answer templates: S001-S006 have custom implementations in `answerTemplates` object; all others use category-based defaults from `generate-answer-templates.js`

### React Project Structure (training-sets-react/)

Modern SPA that provides an interactive viewer for the same 100 examples:

```
src/
├── data/
│   └── examplesData.js       # Same structure as vanilla version
├── pages/
│   ├── Home.jsx              # Main page with filtering and example cards
│   ├── GuideViewer.jsx       # Renders guide content for an example
│   └── PracticeViewer.jsx    # Provides practice environment
├── App.jsx                   # Router setup (/, /guide/:id, /practice/:id)
└── main.jsx                  # Entry point
```

**Routing Strategy**:
- `/` - Home page with all examples and filters
- `/guide/:id` - View guide for a specific example (e.g., /guide/S001)
- `/practice/:id` - Practice environment for an example (e.g., /practice/S001)

**State Management**: Uses React's built-in `useState` for filtering (no external state library)

## Data Schema

Both projects use the same example data structure:

```javascript
{
  id: 'S001',                    // Unique ID (S001-S100)
  title: '기본 3단 레이아웃',     // Example title
  desc: 'Header, Main, Footer...',  // Description
  difficulty: 'beginner',        // 'beginner' | 'intermediate' | 'advanced'
  category: 'layout'             // 'layout' | 'component' | 'form' | 'visual' | 'animation'
}
```

**Important**: If you modify examples data:
- Update **both** `training-sets/assets/js/examples-data.js` AND `training-sets/generate-examples.js` (the `examplesData` array at the top)
- Update `training-sets-react/src/data/examplesData.js` to keep them in sync
- Note: `training-sets-react/public/generate-examples.js` is a misplaced copy - it should not be there and can be safely removed
- For enhanced guides: Add or modify entries in `custom-guide-data-full.js` with detailed requirements, implementation steps, and checklists
- Regenerate vanilla examples: `cd training-sets && node generate-examples.js` (automatically uses custom guide data)

## Design System

All examples follow a consistent design system:

### Color Palette
- Primary: `#4F46E5` (Indigo)
- Secondary: `#10B981` (Green)
- Accent: `#FF9800` (Orange)
- Dark: `#222222`
- Light: `#F3F4F6`
- White: `#FFFFFF`

### Spacing Scale (8px)
Use multiples of 8px: `8px, 16px, 24px, 32px, 40px, 48px`

### Typography
- Font Stack: `Pretendard, -apple-system, BlinkMacSystemFont, sans-serif`
- Line Height: `1.6` (body), `1.2` (headings)

### Transitions
- Fast: `0.15s`
- Base: `0.3s` (default)
- Slow: `0.5s`

## Categories & Difficulty Levels

### Categories (5 types)
- **layout** (📐) - Flexbox, Grid, responsive layouts
- **component** (🧩) - Reusable UI components
- **form** (📝) - Input fields, validation, form controls
- **visual** (🎨) - Visual design, images, branding
- **animation** (✨) - CSS animations and transitions

### Difficulty Levels (3 tiers)
- **beginner** (🌱) - S001-S030 (30 examples) - Basic concepts
- **intermediate** (🚀) - S031-S070 (40 examples) - Combined concepts with interactivity
- **advanced** (⚡) - S071-S100 (30 examples) - Complex features and optimizations

## Working with Examples

### Adding a New Example

1. **Edit generate-examples.js**:
   ```javascript
   const examplesData = [
     // ... existing examples
     { id: 'S101', title: '새 예제', desc: '설명', difficulty: 'beginner', category: 'layout' }
   ];
   ```

2. **Regenerate vanilla examples**:
   ```bash
   cd training-sets
   node generate-examples.js
   ```

3. **Update React data**:
   - Copy the new entry to `training-sets-react/src/data/examplesData.js`

### Modifying Example Templates

The generation script has three template functions in `generate-examples.js`:
- `generateGuideHTML(example)` - Creates A-guide.html with requirements and checklists (automatically uses custom-guide-data-full.js if available)
- `generatePracticeHTML(example)` - Creates B-practice.html with starter code
- `generateAnswerHTML(example)` - Creates C-answer.html with complete solution

To modify all future generated examples, edit these functions. For answer templates:
- Custom answers for specific examples: Add to the `answerTemplates` object in `generate-examples.js` (currently S001-S006)
- Default category-based answers: Modify `generateDefaultAnswerByCategory()` in `generate-answer-templates.js`

### Custom Guide Data System

**custom-guide-data-full.js** provides rich, example-specific guide data for all 100 examples:
- **learningPoints** - Detailed learning objectives for each example
- **requirements.html** - Specific HTML structure requirements
- **requirements.css** - CSS layout and styling requirements
- **requirements.details** - Additional styling details
- **styles** - Example-specific color palette, typography, and spacing specifications
- **implementation** - Step-by-step code examples with explanations
- **checklist** - Comprehensive completion checklist items

**Integration**: The `generateGuideHTML()` function automatically checks for custom data for each example. If found, it uses the custom data; otherwise, it falls back to category-based templates. This provides a seamless blend of detailed custom guides where available and consistent baseline guides for all examples.

## File Generation Architecture

The vanilla project uses a sophisticated template-based generation system:

### Unified Generation System (generate-examples.js)
The script now uses a hybrid approach that combines the best of both worlds:
- Uses `examplesData` array for example metadata
- Automatically integrates `custom-guide-data-full.js` for enhanced guides where available
- Falls back to category/difficulty-based templates when custom data is absent
- Custom answer templates for S001-S006 in `answerTemplates` object
- Default category-based answers for remaining examples

### Generation Flow
1. **Data Sources**:
   - `examplesData` array in `generate-examples.js` (lines 13-116) defines all 100 examples
   - `customGuideData` from `custom-guide-data-full.js` provides detailed guide content for all 100 examples
2. **Category Metadata**: `categoryGuides` object defines focus areas and requirements per category
3. **Difficulty Metadata**: `difficultyLevels` object defines complexity levels
4. **Layout Diagrams**: `layoutDiagrams` object provides ASCII art diagrams per category
5. **Template Generation**: Three functions create HTML files:
   - `generateGuideHTML()` - Checks for custom guide data first, then falls back to category templates. Creates comprehensive learning guides with step-by-step implementation
   - `generatePracticeHTML()` - Creates practice files with CSS variable setup and TODO comments
   - `generateAnswerHTML()` - Uses either custom templates (answerTemplates object) or category defaults
6. **File Writing**: `generateExample()` function creates folders and writes all 3 HTML files

### Answer Template Strategy
- **Custom Templates** (S001-S006): Fully hand-crafted solutions in `answerTemplates` object
- **Category Defaults** (S007-S100): Auto-generated from `generateDefaultAnswerByCategory()` in `generate-answer-templates.js`
- Each category (layout/component/form/visual/animation) has a default template structure
- Default templates include CSS variables, basic styling, and a green success banner

## Technology Stack

### Vanilla Project
- Pure HTML5 (semantic tags)
- CSS3 (Flexbox, Grid, animations)
- Vanilla JavaScript (ES6+, DOM manipulation)
- Node.js (for generation script only)

### React Project
- React 19.1.1
- React Router DOM 7.9.4
- Vite 7.1.7 (build tool with HMR)
- ESLint (code quality)

## Important Notes

- **No frameworks in vanilla examples**: Training focuses on pure web fundamentals
- **Examples are auto-generated**: Don't manually edit S001-S100 folders in vanilla project
- **Keep data in sync**: Changes to example data must be reflected in both projects
- **8px spacing system**: All spacing should be multiples of 8px for consistency
- **Browser compatibility**: Target modern evergreen browsers (no IE support needed)
