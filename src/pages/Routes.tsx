import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import StartPage from "./StartPage.tsx";
import RoulettePage from "./RoulettePage.tsx";

const router = createBrowserRouter([
  {
    path: "/start",
    element: <StartPage />,
  },
  {
    path: "/roulette",
    element: <RoulettePage />,
  },
  {
    path: "*",
    element: <Navigate to="/start" replace={true} />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
