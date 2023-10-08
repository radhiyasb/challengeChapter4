import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Search from "./pages/Search";
import AllMovies from "./components/AllMovies";
import "../src/styles/App.css";
import NoNavbar from "./components/NoNavbar";
import { ToastContainer } from "react-toastify";
import { GoogleOAuthProvider } from "@react-oauth/google";


function App() {
  return (
    <>
      <div className="app">
        <GoogleOAuthProvider>
          <BrowserRouter>
            <NoNavbar>
              <Navbar />
            </NoNavbar>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/all-movies" element={<AllMovies />} /> 
              <Route path ="/details:id" element={<Details/>}/>            
            </Routes>
            <ToastContainer theme="colored" />
          </BrowserRouter>
        </GoogleOAuthProvider>
      </div>
    </>
  );
}

export default App;
