import React from "react";
import { NavLink } from "react-router-dom";

function BlogDetails({ post }) {
  return (
    <div>
      <div className=" text-left" key={post.id}>
        <NavLink to={`/blog/${post.div}`}>
          <p className=" font-bold text-xl">{post.title}</p>
        </NavLink>
        <p className=" text-sm">
          By <span className=" italic">{post.author}</span> on {}
          <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
            <span className=" underline font-bold hover:cursor-pointer">
              {post.category}
            </span>
          </NavLink>
        </p>
        <p className="text-sm">Posted on {post.date}</p>
        <p className="mt-2 text-justify">{post.content}</p>
        <div className="mt-1">
          {post.tags.map((tag, index) => (
            <NavLink to={`/tags/${tag.replace(" ", "-")}`}>
              <span
                className="underline text-blue-500 mx-1 hover:cursor-pointer"
                key={index}
              >{`#${tag}`}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogDetails;
