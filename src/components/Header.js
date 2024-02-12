import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className=" w-full shadow-md bg-slate-200 py-2 fixed top-0 ">
      <header className="text-2xl text-amber-700 text-center font-bold  ">
        <NavLink to={"/"}>ThoughtCanvas</NavLink>
      </header>
    </div>
  );
}

export default Header;
