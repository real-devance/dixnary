
# Dictionary App 📚

A simple and intuitive dictionary app built with React. Search for word definitions, synonyms, and more.

 **[Live Demo](https://dixnary.netlify.app/)**

## Features

- 📖 Word Definitions
- 🔍 Synonyms 
- 💡 Word Suggestions
- 🔊 Pronunciations

## 🛠️ Implementation Details

### Custom Hooks

- **`useClickOutside`**: Detects clicks outside of the active element to handle interactions effectively.
- **`useDebounceValue`**: Debounces user input to improve performance by reducing unnecessary re-renders and API calls.
- **`useTheme`**: Manages light and dark themes for a customizable user experience.

### Context API

- **ThemeContext**: Provides global theme management for consistent styling across the app
- **WordSearchContext**: Manages the state and logic for handling word search queries and results

## 🚀 Get It Running

```bash
# clone
git clone https://github.com/real-devance/dixnary-react

# navigate to the project directory
cd dixnary-react

# Install dependencies
npm install

# run
npm run dev
```

## 🧰 Tech Stack

- ⚛️ React
- 🟦 TypeScript
- 🎨 Tailwind CSS
- ⚡ Vite
- 🛣️ React Router

## Acknowledgements

- **Dictionary API**: [dictionaryapi.dev](https://dictionaryapi.dev/) 
- **Datamuse API**: [datamuse.com/api](https://datamuse.com/api/)
- **Design**: [Frontend Mentor - Dictionary Web App](https://www.frontendmentor.io/challenges/dictionary-web-app-h5wwnyuKFL)