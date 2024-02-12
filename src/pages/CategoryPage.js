import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

function CategoryPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const catagory = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div className=" w-11/12 max-w-[650px] flex flex-col justify-center items-center  gap-y-9 my-[80px] mt-10 mx-auto">
        <div className="flex mt-7 items-center gap-4 -mb-20">
          <button
            className="border-2 border-black p-1 rounded-md block "
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <div>
            Blogs on <span>{catagory}</span>
          </div>
        </div>
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
}

export default CategoryPage;
