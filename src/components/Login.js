import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  return (
    <div className="w-full justify-center items-center flex flex-col">
      <div className="w-full max-w-[400px] mx-auto my-10 p-5 bg-gray-100 rounded-md shadow-md">
        <h2 className="text-3xl font-semibold my-5">Welcome to back</h2>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Username"
            className="border-2 p-2 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 p-2 rounded-md"
          />
          <button className="bg-blue-500 text-white rounded-md p-2">
            Login
          </button>
              </form>
              <span>
                <p className="my-5">
                  Don't have an account?{" "}
                      <Link to="/signup" className="text-blue-500">Sign up</Link>
                      
                </p>
              </span>
      </div>
    </div>
  );
};

export default Login;
