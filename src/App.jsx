import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Problem from "./pages/Problem";
import Market from "./pages/market/Market";
import Typeface from "./pages/market/Typeface";
import Theme from "./pages/market/Theme";
import ColorPalette from "./pages/market/ColorPalette";
import IllustrationStyle from "./pages/market/IllustrationStyle";

function App() {
  return (
    <>
      <div className="md:block hidden">
        <Router>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard/home" element={<Home />}></Route>
            <Route path="/dashboard/problem" element={<Problem />}></Route>
            <Route path="/dashboard/market" element={<Market />}></Route>
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
          </Routes>
        </Router>
      </div>
      <div className="md:hidden block">Please open on mobile</div>
    </>
  );
}

export default App;
