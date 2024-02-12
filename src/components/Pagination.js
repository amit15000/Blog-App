import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pagination() {
  const { loading, page, totalPages, handlePageChange } =
    useContext(AppContext);

  return (
    <div className=" flex w-full border py-2 justify-center mx-auto fixed bottom-0 bg-white">
      <div className="w-11/12 max-w-[650px]">
        <div className="flex flex-row justify-between items-center">
          <div className="flex gap-x-3">
            {page > 1 && (
              <button
                className=" border-2 rounded-md px-3 py-1 hover:bg-black hover:text-white"
                onClick={() => handlePageChange(page - 1)}
              >
                Previous
              </button>
            )}
            {page < totalPages && (
              <button
                className=" border-2 rounded-md px-3 py-1 hover:bg-black hover:text-white"
                onClick={() => handlePageChange(page + 1)}
              >
                Next
              </button>
            )}
          </div>
          <div className="">
            {!loading && (
              <p>
                Page {page} of {totalPages}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
