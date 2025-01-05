import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import Home from "../pages/Home";

const mainRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <SnackbarProvider maxSnack={3}>
        <Home />
      </SnackbarProvider>
    ),
  },
]);

export default mainRoutes;
