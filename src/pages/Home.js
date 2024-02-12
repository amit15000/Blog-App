import React from "react";
import Header from "../components/Header";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
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
