import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { BoardContext } from './contexts/BoardContext';
import { ChatContext } from './contexts/ChatContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	// <React.StrictMode>
	<HelmetProvider>
		<BrowserRouter>
			<ChatContext>
				<App />
			</ChatContext>
		</BrowserRouter>
	</HelmetProvider>,
	// </React.StrictMode>,
);

reportWebVitals();
