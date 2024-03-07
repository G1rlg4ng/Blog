import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [login, setLogin] = useState(false);
  return (
    <nav className="flex justify-between items-center my-2 w-full md:w-[40%] mx-auto text-xl font-semibold px-5">
      <h1 className="text-blue-500">
        Content<span>Verse</span>
      </h1>
      <ul className="flex gap-5">
        <li className="cursor-pointer text-lg text-blue-500">
          <Link to="/">Home</Link>
        </li>
        <li className="cursor-pointer text-lg text-blue-500">
          <Link to="/create">New Blog</Link>
        </li>
        <li className="cursor-pointer text-lg text-blue-500">
          <Link to="/login">Login</Link>
        </li>
        <li className="cursor-pointer text-lg text-blue-500">
          <Link to="/signup">Signup</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
