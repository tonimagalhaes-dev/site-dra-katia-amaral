
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BUILD_TRIGGER, FORCE_REBUILD } from './lib/build-trigger'

// Reference build triggers to force TypeScript rebuild
console.log('Starting app with build trigger:', BUILD_TRIGGER, 'Force rebuild:', FORCE_REBUILD);

createRoot(document.getElementById("root")!).render(<App />);
