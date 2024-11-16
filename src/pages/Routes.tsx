import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import StartPage from "./StartPage.tsx";
import RoulettePage from "./RoulettePage.tsx";
import MainPage from "./MainPage.tsx";
import DetailPage from "./DetailPage.tsx";

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
    path: "/detail/:id",
    element: <DetailPage />,
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
