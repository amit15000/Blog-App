import React from "react";
import { NavLink } from "react-router-dom";

function BlogDetails({ post }) {
  return (
    <div>
      <div className=" text-left" key={post.id}>
        <NavLink to={`/blog/${post.id}`}>
          <p className=" font-bold text-xl">{post.title}</p>
        </NavLink>
        <p className=" text-sm">
          By <span className=" italic">{post.author}</span> on {}
          <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <span className=" underline font-bold hover:cursor-pointer">
              {post.category.replaceAll(" ", "-")}
            </span>
          </NavLink>
        </p>
        <p className="text-sm">Posted on {post.date}</p>
        <p className="mt-2 text-justify">{post.content}</p>
        <div className="mt-1">
          {post.tags.map((tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
              <span className="underline text-blue-500 mx-1 hover:cursor-pointer">{`#${tag.replaceAll(
                " ",
                "-"
              )}`}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
