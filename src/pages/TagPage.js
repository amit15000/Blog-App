import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";

function TagPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const tag = location.pathname.split("/").at(-1);
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
            Blog Tagged{" "}
            <span className="underline text-blue-500 mx-1 hover:cursor-pointer">
              #{tag.replaceAll("%20", "-")}
            </span>
          </div>
        </div>
        <Blogs />
        <Pagination />
      </div>
    </div>
  );
}

export default TagPage;
