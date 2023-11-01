import "./app.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./pages/admin/common/Layout";
import Collection from "./pages/admin/collection";
import History from "./pages/admin/history";
import Dashboard from "./pages/admin/dashboard";
import { useDispatch } from "react-redux";
import { turnOff } from "./store/options";
import { createContext, useEffect, useRef } from "react";

export const refContext = createContext();

function App() {
  const dispatch = useDispatch();
  const sortRef = useRef(null);
  const createNewRef = useRef(null);

  useEffect(() => {
    // const opt = [sortRef.current, createNewRef.current];
    const fun = (e) => {
      if (e.target != sortRef.current && e.target != createNewRef.current) {
        dispatch(turnOff());
      }
    };
    window.addEventListener("click", fun);

    return () => {
      window.removeEventListener("click", fun);
    };
  }, []);

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
          path: ":id",
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
  ]);

  return (
    <refContext.Provider value={{ sortRef, createNewRef }}>
      <RouterProvider router={router} />
    </refContext.Provider>
  );
}

export default App;
