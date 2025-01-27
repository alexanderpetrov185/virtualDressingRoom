// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client';  // Обратите внимание на новый импорт
import App from './App';

// Используем createRoot для рендеринга компонента
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
