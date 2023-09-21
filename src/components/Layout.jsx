/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";
import Background from "../assets/defaultbg.svg";
import hexcoin from "../assets/hexcoin.svg";
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Groups2Icon from '@mui/icons-material/Groups2';
import UploadIcon from '@mui/icons-material/Upload';
import axios from '../axios';
import { useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Layout({ children, title }) {
  // const [amount, setAmount] = useState(0)
  // const navigate = useNavigate();
  const getCart = async () => {
    try {
      const res = await axios.get("/api/v1/carts", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      })
      localStorage.setItem("amount",res.data.amount_left)
    } catch (error) {
      if (error?.response) {
        toast.error(error?.response?.data?.detail)
      } else {
        toast.error(error?.message)
      }
    }
  }

  useEffect(()=> {
    getCart()
  },[])
  return (
    <div
      className="h-screen w-screen bg-cover bg-center relative flex"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      {/* Sidebar */}
      <div className="w-1/4 min-w-[300] p-4 m-5 rounded-xl bg-[#250A19B2] text-white flex flex-col">
        {/* Logo */}
        <div className="text-center mb-4 h-24">
          <img src={logo} alt="Logo" className="mx-auto" />
        </div>

        {/* Nav links */}
        <nav className="mt-10">
          <ul className="flex flex-col gap-2 ">
            <NavLink
                className={({ isActive, isPending }) =>
                  (isPending ? "pending" : isActive ? "text-white " : "")+" p-2 hover:bg-black hover:bg-opacity-40 px-3 rounded-md cursor-pointer font-SpaceGrotesk flex items-center gap-2"
                }
                to={"/dashboard/home"}
            >
              {({ isActive }) => (
                <>
                  <p className={`${isActive && "text-white"}`}>
                    <HomeIcon />
                  </p>
                  <p className={`${isActive && "text-white"}`}>
                    Home
                  </p>
                </>
              )}
            </NavLink>
            <NavLink
                className={({ isActive, isPending }) =>
                  (isPending ? "pending" : isActive ? "text-white " : "")+" p-2 hover:bg-black hover:bg-opacity-40 px-3 rounded-md cursor-pointer font-SpaceGrotesk flex items-center gap-2"
                }
                to={"/dashboard/problem"}
            >
              {({ isActive }) => (
                <>
                  <p className={`${isActive && "text-white"}`}>
                    <SportsBasketballIcon />
                  </p>
                  <p className={`${isActive && "text-white"}`}>
                    Problem Statement
                  </p>
                </>
              )}
            </NavLink>
            <NavLink
                className={({ isActive, isPending }) =>
                  (isPending ? "pending" : isActive ? "text-white " : "")+" p-2 hover:bg-black hover:bg-opacity-40 px-3 rounded-md cursor-pointer font-SpaceGrotesk flex items-center gap-2"
                }
                to={"/dashboard/market"}
            >
              {({ isActive }) => (
                <>
                  <p className={`${isActive && "text-white"}`}>
                    <ShoppingCartIcon />
                  </p>
                  <p className={`${isActive && "text-white"}`}>
                    Marketplace
                  </p>
                </>
              )}
            </NavLink>
            <NavLink
                className={({ isActive, isPending }) =>
                  (isPending ? "pending" : isActive ? "text-white " : "")+" p-2 hover:bg-black hover:bg-opacity-40 px-3 rounded-md cursor-pointer font-SpaceGrotesk flex items-center gap-2"
                }
                to={"/dashboard/teaminfo"}
            >
              {({ isActive }) => (
                <>
                  <p className={`${isActive && "text-white"}`}>
                    <Groups2Icon />
                  </p>
                  <p className={`${isActive && "text-white"}`}>
                    Team Info
                  </p>
                </>
              )}
            </NavLink>
            <NavLink
                className={({ isActive, isPending }) =>
                  (isPending ? "pending" : isActive ? "text-white " : "")+" p-2 hover:bg-black hover:bg-opacity-40 px-3 rounded-md cursor-pointer font-SpaceGrotesk flex items-center gap-2"
                }
                to={"/dashboard/submission"}
            >
              {({ isActive }) => (
                <>
                  <p className={`${isActive && "text-white"}`}>
                    <UploadIcon />
                  </p>
                  <p className={`${isActive && "text-white"}`}>
                    Submission
                  </p>
                </>
              )}
            </NavLink>
          </ul>
        </nav>

        {/* Logout button */}
        <div className="mt-auto">
          <button onClick={() => {
            localStorage.removeItem("token");
            window.location.reload()
          }} className="hover:bg-black hover:bg-opacity-40 py-2 px-4 rounded-md w-full font-DelaGothicOne flex items-center justify-center gap-2">
            <LogoutIcon style={{color:"rgba(234, 211, 193, 0.6)"}} />
            <p>Logout</p>
          </button>
        </div>
      </div>

      {/* Main content */}
      <div className="w-3/4 flex-grow p-4 overflow-y-scroll no-scrollbar">
        {/* Page title */}
        <div className="text-white flex mb-4 w-full items-center">
          <h1 className="text-4xl grow my-2 font-DelaGothicOne text-heading">
            {title}
          </h1>
          <div className="flex items-center w-32 h-10 rounded-md bg-[#250A19B2] justify-evenly font-DelaGothicOne">
            <img src={hexcoin} className="inline w-[25%] h-[90%]" />
            {localStorage.getItem("amount")}
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
