import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import FormPage from "./pages/FormPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/create",
    element: <FormPage />,
  },
  {
    path: "/edit/:id",
    element: <FormPage />,
  },
]);
