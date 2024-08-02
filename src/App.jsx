import "./assets/styles/generic-styles.scss";
import Explorer from "./routes/Explorer";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Explorer />,
    },
  ]);

  return (
    <>
      (
      <RouterProvider router={router} />)
    </>
  );
}

export default App;
