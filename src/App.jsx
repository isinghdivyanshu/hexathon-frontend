import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
// import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Problem from "./pages/Problem";
import Market from "./pages/market/Market";
import Teaminfo from "./pages/Teaminfo";
import Submission from "./pages/Submission";
import GuardedRoute from "./components/RouteGuard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MarketCategory from "./pages/market/MarketCategory";
import warning from "./assets/mobilewarning.svg";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      <div className="md:block hidden">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/login" element={<Login />}></Route>
            {/* <Route path="/register" element={<Register />}></Route> */}
            <Route path="/dashboard" element={<GuardedRoute />}>
              <Route path="/dashboard/home" element={<Home />}></Route>
              <Route path="/dashboard/problem" element={<Problem />}></Route>
              <Route path="/dashboard/market" element={<Market />}></Route>
              <Route
                path="/dashboard/submission"
                element={<Submission />}
              ></Route>
              <Route path="/dashboard/teaminfo" element={<Teaminfo />}></Route>
              <Route
                path="/dashboard/market/category/:id"
                element={<MarketCategory />}
              ></Route>
            </Route>
          </Routes>
        </Router>
      </div>
      <div
        className="md:hidden block w-screen h-screen"
        style={{ backgroundImage: `url(${warning})` }}
      ></div>
    </>
  );
}

export default App;
