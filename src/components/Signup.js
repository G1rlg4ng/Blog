import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Signup = () => {
  return (
    <div className="w-full justify-center items-center flex flex-col">
      <div className="w-full max-w-[400px] mx-auto my-10 p-5 bg-gray-100 rounded-md shadow-md">
        <h2 className="text-3xl font-semibold my-5">Create an account</h2>
        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Username"
            className="border-2 p-2 rounded-md"
          />
          <input
            type="email"
            placeholder="Email"
            className="border-2 p-2 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 p-2 rounded-md"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="border-2 p-2 rounded-md"
          />
          <button className="bg-blue-500 text-white rounded-md p-2">
            Sign up
          </button>
        </form>
        <span>
          <p className="my-5">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </p>
        </span>
      </div>
    </div>
  );
};

export default Signup;
