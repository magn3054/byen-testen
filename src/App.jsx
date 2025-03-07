import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Forward from "./views/Forward";
import Backward from "./views/Backward";
import "./App.css";
import DefaultPage from "./views/DefaultPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <DefaultPage />,
      },
      {
        path: "/forward",
        element: <Forward />,
      },
      {
        path: "/backward",
        element: <Backward />,
      },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
