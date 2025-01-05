import { RouterProvider } from "react-router-dom";
import MainRoutes from "./routes/MainRoutes";
import HeaderView from "./views/HeaderView";
import Footer from "./views/Footer";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

const App = () => {
  return (
    <div>
      <HeaderView />
      <RouterProvider router={MainRoutes} />
      <Footer />
    </div>
  );
};

export default App;
