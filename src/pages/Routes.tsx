import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import StartPage from "./StartPage.tsx";
import RoulettePage from "./RoulettePage.tsx";
import MainPage from "./MainPage.tsx";

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
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "*",
    element: <Navigate to="/start" replace={true} />,
  },
  {
    path: "/*",
    element: <Navigate to="/start" replace={true} />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
