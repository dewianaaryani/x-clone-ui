"use client";
import ImageComp from "@/components/Image";
import { useRouter } from "next/navigation";
import React from "react";

const PostModal = () => {
  const router = useRouter();
  const closeModal = () => {
    router.back();
  };
  return (
    <div className="absolute w-screen h-screen top-0 left-0 z-20 bg-[#293239a6] flex justify-center">
      <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
        {/* TOP */}
        <div className="flex justify-between items-center ">
          <div className="cursor-pointer" onClick={closeModal}>
            X
          </div>
          <div className="text-iconBlue font-bold">Drafts</div>
        </div>
        {/* Center */}
        <div className="py-8 flex gap-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <ImageComp
              path="x-clone/general/avatar.png"
              alt=""
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <input
            className="flex-1 bg-transparent outline-none text-lg"
            type="text"
            placeholder="What's happening?"
          />
        </div>
        {/* Bottom  */}
        <div className="flex justify-between items-center gap-4 flex-wrap border-t border-borderGray pt-4">
          <div className="flex gap-4 flex-wrap">
            <ImageComp
              path="x-clone/icons/image.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageComp
              path="x-clone/icons/gif.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageComp
              path="x-clone/icons/poll.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageComp
              path="x-clone/icons/emoji.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageComp
              path="x-clone/icons/schedule.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
            <ImageComp
              path="x-clone/icons/location.svg"
              alt=""
              w={20}
              h={20}
              className="cursor-pointer"
            />
          </div>
          <button className="py-2 px-5 text-black bg-white rounded-full font-bold">
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
