import { BrowserRouter as Router } from "react-router-dom";
import { SnackbarProvider } from "notistack";
import "./App.css";
import Home from "./pages/Home";
import HeaderView from "./views/HeaderView";
import Footer from "./views/Footer";

const App = () => {
  return (
    <div className="container">
      <HeaderView />
      <SnackbarProvider maxSnack={3}>
        <Home />
      </SnackbarProvider>
      <Footer />
    </div>
  );
};

export default App;
