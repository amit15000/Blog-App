import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";
import BlogDetails from "./BlogDetails";

function Blogs() {
  //cosume
  const { loading, posts } = useContext(AppContext);
  return (
    <div className=" w-11/12 max-w-[650px] flex flex-col justify-center items-center  gap-y-9 my-[80px]">
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div className=" text-center">No Post Found</div>
      ) : (
        posts.map((post) => <BlogDetails key={post.id} post={post} />)
      )}
    </div>
  );
}

export default Blogs;
