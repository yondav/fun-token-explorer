import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from 'react-router-dom';

import { BaseLayout, ErrorView, ExplorerView } from './views';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<BaseLayout />}>
      <Route index element={<Navigate to='/explorer' />} />
      <Route path='explorer' element={<ExplorerView />} />
      <Route path='*' element={<ErrorView />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
