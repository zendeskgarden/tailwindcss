/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Configure polyfill for :focus-visible functionality
 */
import 'focus-visible';

/**
 * Include global Tailwind CSS utilities and Garden Bedrock styling
 */
import './index.css';

import App from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
