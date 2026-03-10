import { createBrowserRouter } from "react-router";
import { HomePage } from "./HomePage";
import { ContactPage } from "./components/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
]);