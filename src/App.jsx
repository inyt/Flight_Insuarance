import {
  createBrowserRouter,
  Route,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";
import "./App.css";

import RootLayout from "./layouts/RootLayout";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Dashboard />} />
      <Route path="about" element={<User />} />
    </Route>
  )
);

const App = () => {
  return (
    <div className="content">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
