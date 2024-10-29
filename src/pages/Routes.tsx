import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import StartPage from "./StartPage.tsx";

const router = createBrowserRouter([
  {
    path: "/start",
    element: <StartPage />,
  },
  {
    path: "*",
    element: <Navigate to="/start" replace={true} />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
