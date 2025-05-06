
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add touch handling for mobile devices
const addTouchSupport = () => {
  if ('ontouchstart' in window) {
    document.documentElement.classList.add('touch-device');
  } else {
    document.documentElement.classList.add('no-touch');
  }
};

// Initialize cross-platform support
addTouchSupport();

createRoot(document.getElementById("root")!).render(<App />);
