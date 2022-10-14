// Core
import React from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

// Styles
import 'react-toastify/dist/ReactToastify.css';
import './theme/init.scss';

// Instruments

// Context provider
import { CommentsFormProvider, queryClient } from './lib';

// App
import { App } from './App';

createRoot(document.getElementById('root')).render(
    <QueryClientProvider client = { queryClient }>
        <CommentsFormProvider>
            <App />
        </CommentsFormProvider>
        <ReactQueryDevtools initialIsOpen = { false } />
    </QueryClientProvider>,
);
