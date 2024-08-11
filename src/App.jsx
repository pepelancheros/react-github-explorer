import "./assets/styles/generic-styles.scss";
import Navbar from "./components/Navbar/Navbar";
import About from "./routes/about/About";
import Explorer from "./routes/explorer/Explorer";
import Home from "./routes/home/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/explorer",
  //     element: <Explorer />,
  //   },
  // ]);

  return (
    <div className="page">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explorer" element={<Explorer />} />
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </div>
  );
}

export default App;
