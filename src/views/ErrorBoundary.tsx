// components/ErrorBoundary.tsx
import type { ReactNode } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import { Fallback } from '../components';

interface ErrorBoundaryProps {
  children: ReactNode;
}

/**
 * Global error boundary component.
 *
 * Wraps child components with a fallback UI in case of runtime errors.
 * Uses `react-error-boundary` internally for error isolation.
 *
 * @param children - The components to wrap inside the boundary.
 * @returns A boundary that renders children normally, or a fallback if an error occurs.
 *
 * @example
 * <ErrorBoundary>
 *   <App />
 * </ErrorBoundary>
 */
export default function ErrorBoundary({ children }: ErrorBoundaryProps) {
  return (
    <ReactErrorBoundary
      FallbackComponent={Fallback}
      onError={(error, info) => {
        console.error('Captured by ErrorBoundary:', error, info);
        // Future: send this to Sentry or LogRocket or your custom logger
      }}
      onReset={() => {
        // Custom logic on retry if needed — for now it just resets
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
}
