import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center my-2 w-full md:w-[40%] mx-auto text-xl font-semibold px-5">
      <h1 className="text-blue-500">
        Content<span>Verse</span>
      </h1>
      <ul className="flex gap-5">
        <li className="bg-blue-500 text-white rounded-[10px] px-5 py-2 ">
          <Link to="/">Home</Link>
        </li>
        <li className="bg-blue-500 text-white rounded-[10px] px-5 py-2 flex-shrink-0">
          <Link to="/create">New Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
