import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import Background from "../assets/background.svg";
import hexcoin from "../assets/hexcoin.svg";

export default function Layout({ children, title }) {
  const navigate = useNavigate();
  return (
    <div
      className="h-screen w-screen bg-cover bg-center relative flex bg-black bg-opacity-60"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      {/* Sidebar */}
      <div className="lg:w-1/6 min-w-[300] p-4 m-5 rounded-xl bg-[#250A19B2] text-white flex flex-col">
        {/* Logo */}
        <div className="text-center mb-4 h-min">
          <img src={logo} alt="Logo" className="mx-auto" />
        </div>

        {/* Nav links */}
        <nav className="mt-10">
          <ul className="flex flex-col gap-2 ">
            <li
              onClick={() => navigate("/dashboard/home")}
              className="p-2 hover:bg-black hover:bg-opacity-40 px-3 rounded-md cursor-pointer font-SpaceGrotesk"
            >
              <Link
                to={"/dashboard/home"}
                className="text-gray-300 hover:text-white"
              >
                Home
              </Link>
            </li>
            <li
              onClick={() => navigate("/dashboard/problem")}
              className="p-2 hover:bg-black hover:bg-opacity-40 px-3 rounded-md cursor-pointer font-SpaceGrotesk"
            >
              <Link
                to={"/dashboard/problem"}
                className="text-gray-300 hover:text-white"
              >
                Problem Statement
              </Link>
            </li>
            <li
              onClick={() => navigate("/dashboard/market")}
              className="p-2 hover:bg-black hover:bg-opacity-40 px-3 rounded-md cursor-pointer font-SpaceGrotesk"
            >
              <Link
                to={"/dashboard/problem"}
                className="text-gray-300 hover:text-white"
              >
                Marketplace
              </Link>
            </li>
            {/* Add more links as needed */}
          </ul>
        </nav>

        {/* Logout button */}
        <div className="mt-auto">
          <button className="bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-md w-full font-DelaGothicOne">
            Logout
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="lg:w-4/5 flex-grow p-4 overflow-y-scroll no-scrollbar">
        {/* Page title */}
        <div className="text-white flex mb-4 w-full items-center">
          <h1 className="text-4xl grow my-2 font-DelaGothicOne text-heading">
            {title}
          </h1>
          <div className="flex items-center w-32 h-10 rounded-md bg-stone-300 justify-evenly font-DelaGothicOne">
            <img
              src={hexcoin}
              className="inline w-[25%] h-[90%]"
            />
            5000
          </div>
        </div>

        {/* Content */}
        <div className="bg-[#250A19B2] text-white p-4 rounded-lg shadow-md">
          {children}
        </div>
      </div>
    </div>
  );
}
