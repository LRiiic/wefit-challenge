import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'react-router-dom';

import Home from './pages/home';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/search",
      element: <Home />,
    },
    {
      path: "/cart",
      element: <div><h1>Cart</h1></div>,
    },
    {
      path: "/checkout",
      element: <div><h1>Checkout</h1></div>,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
