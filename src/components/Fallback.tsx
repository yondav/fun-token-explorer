// components/ErrorFallback.tsx
import { useEffect } from 'react';

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

/**
 * Global fallback UI for unexpected runtime errors.
 *
 * Renders a full-page error screen with retry and home navigation options.
 * Automatically logs the error to the console for debugging.
 *
 * @param error - The thrown JavaScript error.
 * @param resetErrorBoundary - Function to reset the error boundary and retry rendering.
 *
 * @example
 * <ErrorBoundary FallbackComponent={Fallback}>
 *   <App />
 * </ErrorBoundary>
 */
export default function Fallback({
  error,
  resetErrorBoundary,
}: ErrorFallbackProps) {
  useEffect(() => {
    console.error('Logged Error:', error);
  }, [error]);

  return (
    <dialog
      role='dialog'
      aria-labelledby='error-dialog-title'
      className='flex flex-col items-center justify-center gap-6 h-screen w-screen px-4 bg-base-200 text-center'
    >
      <h1 id='error-dialog-title' className='text-4xl font-bold text-error'>
        Something went wrong.
      </h1>
      <p className='text-neutral-500 max-w-md'>
        We encountered an unexpected error. Please try refreshing the page or
        navigating back home.
      </p>

      <div className='flex gap-4'>
        <button
          onClick={resetErrorBoundary}
          className='btn bg-base-content! text-base-200!'
        >
          Retry
        </button>
        <a href='/' className='btn bg-transparent! text-base-content btn-link'>
          Go Home
        </a>
      </div>

      <details className='max-w-lg text-left text-sm mt-6'>
        <summary className='cursor-pointer text-neutral-500'>
          Error details
        </summary>
        <pre className='mt-2 p-2 bg-base-200 rounded-md whitespace-pre-wrap'>
          {error.message}
        </pre>
      </details>
    </dialog>
  );
}
