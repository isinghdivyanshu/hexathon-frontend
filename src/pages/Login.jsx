import logo from "../assets/logo.svg";
import Background from "../assets/defaultbg.svg";
import { useState } from 'react';
import axios from '../axios'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

export default function Login() {
  const [teamName, setTeamName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/v1/auth/login', {
        name: teamName,
        password,
      });

      if (response.status ===200 && response.data) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('amount', response.data.amount);
        console.log(response.data)
        navigate("/dashboard/home")
      }
    } catch (error) {
      // toast 
      console.log(error)
      toast.error(error.response.data.detail)
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center relative"
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >
      <img
        className="absolute top-0 sm:left-0 sm:translate-x-0 sm:pr-5 m-5 left-1/2 -translate-x-1/2 pr-8"
        alt="logo"
        src={logo}
      />
      <div className="bg-[#250A19B2] py-12 px-24 shadow-md rounded-md w-5/6 max-w-[45rem]">
        <h2 className="text-2xl font-semibold mb-4 text-white">
          Nice to see you again.
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="email"
            >
              Team Name
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 fliter;
              "
              required
              id="email"
              placeholder="Enter your team name"
              value={teamName}
              onChange={e=>setTeamName(e.currentTarget.value)}
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-white text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              required
              placeholder="Enter your password"
              value={password}
              onChange={e=>setPassword(e.currentTarget.value)}
            />
          </div>
          <div className="mb-4 text-right">
            <p
              // to={"#"}
              className="text-white text-sm font-medium"
            >
              Forgot Password? 
            </p>
            <p
              // to={"#"}
              className="text-white text-sm font-medium"
            >
              Approach a GDSC member or the check-in desk.
            </p>
            
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign In
          </button>
          {/* <div className="mt-4 text-center">
            <p className="text-sm text-white">Don&apos;t have an account?</p>
            <Link
              to={"/register"}
              className="text-blue-500 text-sm font-medium hover:underline"
            >
              Register Now.
            </Link>
          </div> */}
        </form>
      </div>
    </div>
  );
}
