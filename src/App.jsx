import "./app.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/admin/common/Layout";
import Collection from "./pages/admin/collection";
import History from "./pages/admin/history";
import Dashboard from "./pages/admin/dashboard";

function App() {
  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Collection />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
    ],
  },
])
  return <RouterProvider router={router}/>
}

export default App;
