// Core
import React from 'react';
import { createRoot } from 'react-dom/client';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// Instruments

// Context provider
import { CommentsFormProvider } from './lib/commentsFormContext';

// App
import { App } from './App';

createRoot(document.getElementById('root')).render(
    <>
        <CommentsFormProvider>
            <App />
        </CommentsFormProvider>
    </>,
);
