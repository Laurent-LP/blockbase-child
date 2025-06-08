import React from 'react';
import { createRoot } from 'react-dom/client';
import CarteCadeauPage from './components/CarteCadeauPage';
import './index.css';

const mount = document.getElementById('carte-cadeau-root');
if (mount) createRoot(mount).render(<CarteCadeauPage />);
