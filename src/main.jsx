import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

console.log("V0: Main entry point executing...");
const rootElement = document.getElementById('root');
console.log("Root element found:", !!rootElement);

if (rootElement) {
  try {
    const root = createRoot(rootElement);
    console.log("React root created, rendering...");
    root.render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
    console.log("Initial render call completed.");
  } catch (err) {
    console.error("Mounting error captured:", err);
  }
} else {
  console.error("Root element NOT FOUND!");
}
