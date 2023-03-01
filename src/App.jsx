import * as React from 'react';
import './App.css';
import Home from './pages/Home';
import {ThemeContextProvider} from './contexts/themeContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Home />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
