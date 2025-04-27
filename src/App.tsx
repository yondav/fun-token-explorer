import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import { BaseLayout, ErrorView, ExplorerView } from './views';
import ErrorBoundary from './views/ErrorBoundary';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<BaseLayout />}>
      <Route index element={<Navigate to='/explorer' />} />
      <Route path='explorer' element={<ExplorerView />} />
      <Route path='*' element={<ErrorView />} />
    </Route>
  )
);

/**
 * Root application component.
 *
 * Sets up the router and global error boundary to ensure
 * safe routing and graceful fallback for unhandled errors.
 */
export default function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  );
}
