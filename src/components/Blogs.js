import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

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
        posts.map((post) => (
          <div className=" text-left" key={post.id}>
            <p className=" font-bold text-xl">{post.title}</p>
            <p className=" text-sm">
              By <span className=" italic">{post.author}</span> on {}
              <span className=" underline font-bold hover:cursor-pointer">
                {post.category}
              </span>
            </p>
            <p className="text-sm">Posted on {post.date}</p>
            <p className="mt-2 text-justify">{post.content}</p>
            <div className="mt-1">
              {post.tags.map((tag, index) => (
                <span
                  className="underline text-blue-500 mx-1 hover:cursor-pointer"
                  key={index}
                >{`#${tag}`}</span>
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Blogs;
