import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';
import { SwapProvider } from './contexts/swapToken/swapToken.provider.tsx';
import { UiSettingsProvider } from './contexts/uiSettings/index.ts';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UiSettingsProvider>
      <SwapProvider>
        <App />
      </SwapProvider>
    </UiSettingsProvider>
  </StrictMode>
);
