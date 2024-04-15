import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center  w-100 mx-auto px-4 text-[white] bg-[#000300] ">
      <h1 className="w-fit text-3xl font-bold text-[#00df9a] m-4">
        <Link className=" hover:text-[crimson] text-[#00df9a]" to="/">
        MedBuddy
        </Link>
      </h1>
      <ul className="hidden md:flex ">
        <Link to="/">
          <li className="p-4 text-[white]  hover:text-[crimson] hover:font-semibold">Home</li>
        </Link>

        
        <Link to="/records">
          <li className="p-4  text-[white] hover:text-[crimson]">Records</li>
        </Link>

        {/* <Link to="/create">
          <li className="p-4  text-[white] hover:text-[crimson]">Add Records</li>
        </Link> */}

        <Link to="/ai-predictor">
          <li className="p-4 text-[white]  hover:text-[crimson]">Check Diseases</li>
        </Link>

        {/* <Link to="/analysis">
          <li className="p-4 text-[white]  hover:text-[crimson]">Analyse Reports</li>
        </Link> */}

        <Link to="/login">
          <li className="p-4 text-[white]  hover:text-[crimson]">Logout</li>
        </Link>
      
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#00df9a] m-4">
          <Link className="text-[#00df9a]" to="/">
          MedBuddy
          </Link>
        </h1>
        <Link to="/">
          <li className="p-4 text-[white]  hover:text-[crimson] hover:font-semibold">Home</li>
        </Link>

        <Link to="/records">
          <li className="p-4  text-[white] hover:text-[crimson]">Med-Records</li>
        </Link>

        <Link to="/create">
          <li className="p-4  text-[white] hover:text-[crimson]">Add Records</li>
        </Link>

        <Link to="/ai-predictor">
          <li className="p-4 text-[white]  hover:text-[crimson]">Check Diseases</li>
        </Link>

        <Link to="/analysis">
          <li className="p-4 text-[white]  hover:text-[crimson]">Analyse Reports</li>
        </Link>

        <Link to="/login">
          <li className="p-4 text-[white]  hover:text-[crimson]">Logout</li>
        </Link>

      </ul>
    </div>
  );
};

export default Navbar;
