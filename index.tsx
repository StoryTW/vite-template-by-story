import { createRoot } from 'react-dom/client';

import App from '@/App';

import 'modern-normalize/modern-normalize.css';
import '@/assets/styles/_index.scss';

createRoot(document.getElementById('root')!).render(<App />);
