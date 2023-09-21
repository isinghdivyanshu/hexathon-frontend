import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import Background from '../assets/background.svg'

export default function Login() {
  return (
    <div 
      className="min-h-screen flex items-center justify-center bg-black bg-opacity-60 relative" 
      style={{
        backgroundImage: `url(${Background})`,
      }}
    >

      <img className='absolute top-0 sm:left-0 sm:translate-x-0 sm:pr-5 m-5 left-1/2 -translate-x-1/2 pr-8' alt='logo' src={logo} />
      <div className="bg-white py-12 px-24 shadow-md rounded-md w-5/6 max-w-[45rem]">
        <h2 className="text-2xl font-semibold mb-4">Nice to see you again.</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 text-sm font-semibold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-4 text-right">
            <Link to={"#"} className="text-blue-500 text-sm font-medium hover:underline">
              Forgot Password?
            </Link>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Sign In
          </button>
          <div className="mt-4 text-center">
            <p className='text-sm'>Don&apos;t have an account?</p>
            <Link to={"/register"} className="text-blue-500 text-sm font-medium hover:underline">
              Register Now.
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}
