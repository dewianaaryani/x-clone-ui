import React from "react";
import ImageComp from "./Image";

const PostInfo = () => {
  return (
    <div className="cursor-pointer w-4 h-4 relative">
      <ImageComp
        path="x-clone/icons/infoMore.svg"
        alt="post info"
        w={16}
        h={16}
      />
    </div>
  );
};

export default PostInfo;
