import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Cart from "./features/cart/Cart";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import { action as updateOrderAction } from "./features/order/UpdateOrder";

// this way of creating routes is necessary in order to enable data fetching or data loading with react router
const router = createBrowserRouter([
  {
    // parent route
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      // nested routes
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAction,
      },
      {
        path: "/order/:orderId",
        element: <Order />,
        loader: orderLoader,
        errorElement: <Error />,
        action: updateOrderAction,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
