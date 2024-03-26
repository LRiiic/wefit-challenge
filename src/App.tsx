import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'react-router-dom';

import Home from './pages/home';
import Cart from './pages/cart';
import Checkout from './pages/checkout';

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,

      children: [
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/checkout",
          element: <Checkout />,
        },
      ]
    },
    {
      path: "/search",
      element: <Home />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
