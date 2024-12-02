import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './AppLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
  },
]);

const App = () => (
  <div>
    <RouterProvider router={router} />
  </div>
);

export default App;
