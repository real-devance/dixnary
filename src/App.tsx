import Header from './components/layout/Header';
import Main from './components/layout/Main';
import { WordSearchProvider } from './context/WordSearchContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <div className="p-5 min-h-[100dvh] bg-slate-50 dark:bg-black">
      {/* Container for the main content with padding and full viewport height */}
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Provider for managing theme context */}
        <ThemeProvider>
          
          <Header />
          {/* Provider for managing word search context */}

          <WordSearchProvider>
            {/* Main content area including search and word details */}
            <Main />
          </WordSearchProvider>

        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;
