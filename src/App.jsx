import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
// import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Problem from "./pages/Problem";
import Market from "./pages/market/Market";
import Teaminfo from "./pages/Teaminfo";
import Typeface from "./pages/market/Typeface";
import Theme from "./pages/market/Theme";
import ColorPalette from "./pages/market/ColorPalette";
import IllustrationStyle from "./pages/market/IllustrationStyle";
import Submission from "./pages/Submission";
import GuardedRoute from './components/RouteGuard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                path="/dashboard/market/typeface"
                element={<Typeface />}
              ></Route>
              <Route path="/dashboard/market/theme" element={<Theme />}></Route>
              <Route
                path="/dashboard/market/color_palette"
                element={<ColorPalette />}
              ></Route>
              <Route
                path="/dashboard/market/illustration_style"
                element={<IllustrationStyle />}
              ></Route>
            </Route>
          </Routes>
        </Router>
      </div>
      <div className="md:hidden block">Please open on mobile</div>
    </>
  );
}

export default App;
