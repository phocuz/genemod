import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AppLayout from './AppLayout';
import SignUp from './ui/Login';
import Login from './ui/SignUp';


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

const App = () => (
  <div>
    <RouterProvider router={router} />
  </div>
);

export default App;
