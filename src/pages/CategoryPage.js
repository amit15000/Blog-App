import React from "react";
import { useLocation, useNavigation } from "react-router-dom";
import Blogs from "../components/Blogs";
import Pagination from "../components/Pagination";
import Header from "../components/Header";

function CategoryPage() {
  const navigate = useNavigation();
  const location = useLocation();
  const catagory = location.pathname.split("/").at(-1);
  return (
    <div>
      <Header />
      <div>
        <button onClick={() => navigate(-1)}>Back</button>
        <h2>
          Blogs on <span>{catagory}</span>
        </h2>
      </div>
      <Blogs />
      <Pagination />
    </div>
  );
}

export default CategoryPage;
