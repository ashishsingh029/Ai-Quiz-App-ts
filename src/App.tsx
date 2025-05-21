import { RouterProvider, createBrowserRouter } from "react-router-dom";
import BaseLayout from "./layout/base.layout";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { Toaster } from "react-hot-toast"
const App = () => {
  const browserRoutes = createBrowserRouter([
    {
      path: "/",
      element: <BaseLayout />,
      children: [
        { path: "/", element: <Login />, },
        { path: "/login", element: <Login />, },
        { path: "/register", element: <Register />, },
      ],
    },
    {
      path: "/*",
      element: (
        <div className="flex text-4xl items-center justify-center">
          NOT FOUND
        </div>
      ),
    }
  ]);
  return (
    <>
      <RouterProvider router={browserRoutes} />
      <Toaster />
    </>
  );
};
export default App;
