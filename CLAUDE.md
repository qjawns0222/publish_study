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
# Generate all 100 example folders with A-guide.html and B-practice.html files
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

- **generate-examples.js** - Node.js script that auto-generates all 100 example folders
- **assets/js/examples-data.js** - Single source of truth for all 100 examples (array of objects)
- **assets/js/main.js** - Main JavaScript for index.html filtering and display
- **assets/css/common.css** - Shared styles across guide pages
- **S001/ through S100/** - Auto-generated folders, each containing:
  - **A-guide.html** - Learning guide with requirements, style guide, and checklist
  - **B-practice.html** - Practice file with starter template and hints

**Key Pattern**: The examples are NOT manually created. They're generated from `examplesData` array in `generate-examples.js`. To add/modify examples:
1. Edit the `examplesData` array in `generate-examples.js`
2. Run `node generate-examples.js` to regenerate all files
3. The script uses templates (`generateGuideHTML` and `generatePracticeHTML` functions) to create consistent structure

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
- Update **both** `training-sets/assets/js/examples-data.js` AND `training-sets/generate-examples.js`
- Update `training-sets-react/src/data/examplesData.js` to keep them in sync
- Regenerate vanilla examples: `cd training-sets && node generate-examples.js`

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

The generation script has two template functions:
- `generateGuideHTML(example)` - Creates A-guide.html with requirements and checklists
- `generatePracticeHTML(example)` - Creates B-practice.html with starter code

To modify all future generated examples, edit these functions in `generate-examples.js`.

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
