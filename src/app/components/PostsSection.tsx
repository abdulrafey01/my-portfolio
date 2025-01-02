import React from "react";
import Post from "./Post";

type Props = {};

const PostsSection = (props: Props) => {
  return (
    <div className="bg-blue-400 w-full p-14 flex flex-col gap-8">
      {/* First Container */}
      <div className="bg-red-500 flex justify-between items-center">
        <div className="text-4xl text-secondary font-bold">
          <p>From My</p>
          <p>LinkedIn Posts</p>
        </div>
        <button className="py-2 px-4 text-white text-sm hover:bg-secondary rounded-full bg-primary">
          See all
        </button>
      </div>
      {/* Second Container: Blogs */}
      <div className="bg-white flex justify-between items-center">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
};

export default PostsSection;
