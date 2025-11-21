import ImageComp from "@/components/Image";
import React from "react";

const PostModal = () => {
  return (
    <div className="absolute w-screen h-screen top-0 left-0 z-20 bg-[#293239a6] flex justify-center">
      <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
        {/* TOP */}
        <div>
          <div>
            <div>X</div>
            <div>Drafts</div>
          </div>
        </div>
        {/* Center */}
        <div>
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            {/* <ImageComp
              path="x-clone/general/avatar.png"
              alt=""
              w={100}
              h={100}
              tr={true}
            /> */}
          </div>
          <input type="text" placeholder="What's happening?" />
        </div>
        {/* Bottom  */}
        <div>
          <div></div>
          <button>Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
