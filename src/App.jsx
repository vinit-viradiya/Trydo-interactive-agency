import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import MainPage from "./components/MainHome/Main-Home";
import { Route, Routes } from "react-router-dom";
import BackToTop from "./components/Back-to-top/BackToTop";
const App = () => {
  return (
    <>
      <header id="home" className="px-4 py-3 px-md-5 py-md-4 px-lg-4 p-xl-5">
        <Header />
        <BackToTop/>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mainPage" element={<MainPage />} />
      </Routes>
    </>
  );
};
export default App;
