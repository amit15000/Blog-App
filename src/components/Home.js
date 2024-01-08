import React from "react";
import Header from "./Header";
import Blogs from "./Blogs";
import Pagination from "./Pagination";

function Home() {
  return (
    <div className="flex flex-col items-center gap-y-7">
      <Header />
      <Blogs />
      <Pagination />
    </div>
  );
}

export default Home;
