import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import gdscLogo from "../assets/gdscLogo.svg";
import Background from "../assets/background.svg";

export default function Landing() {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center relative flex flex-col items-center"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      {/* Absolute logo in top-left corner */}
      <img
        src={gdscLogo}
        alt="Logo"
        className="absolute top-0 sm:left-0 sm:translate-x-0 sm:pr-5 m-5 left-1/2 -translate-x-1/2 pr-8 w-[20rem]"
      />

      <img src={logo} alt="Logo" className="w-2/3 max-w-[45rem] mt-40" />

      <Link
        to={"/login"}
        className="bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-700 focus:outline-none w-fit mt-auto mb-16"
      >
        Get Started
      </Link>
    </div>
  );
}
