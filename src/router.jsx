import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CardMain from "./assets/CardMain";
import ErrorPage from "./ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/posts/:postid",
    element: <CardMain />,
  },
]);
