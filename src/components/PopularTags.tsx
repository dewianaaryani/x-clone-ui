import React from "react";
import ImageComp from "./Image";
import Link from "next/link";

const PopularTags = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <h1 className="text-xl font-bold text-textGrayLight">
        {"What's"} Happening
      </h1>
      {/* TREND EVENT */}
      <div className="flex gap-4">
        <div className="relative w-20 h-20 rounded-xl overflow-hidden">
          <ImageComp
            path="x-clone/general/avatar.png"
            alt=""
            w={120}
            h={120}
            tr={true}
          />
        </div>
        <div className="flex-1">
          <h2 className="font-bold text-textGrayLight">
            Sheep just ate a lamb
          </h2>
          <span className="text-sm text-textGray">Last Night</span>
        </div>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray  text-sm">Technologi Trending</span>
          <ImageComp path="x-clone/icons/infoMore.svg" alt="" w={16} h={16} />
        </div>

        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray  text-sm">Technologi Trending</span>
          <ImageComp path="x-clone/icons/infoMore.svg" alt="" w={16} h={16} />
        </div>

        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray  text-sm">Technologi Trending</span>
          <ImageComp path="x-clone/icons/infoMore.svg" alt="" w={16} h={16} />
        </div>

        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      {/* TOPICS */}
      <div className="">
        <div className="flex items-center justify-between">
          <span className="text-textGray  text-sm">Technologi Trending</span>
          <ImageComp path="x-clone/icons/infoMore.svg" alt="" w={16} h={16} />
        </div>

        <h2 className="text-textGrayLight font-bold">OpenAI</h2>
        <span className="text-textGray text-sm">20K posts</span>
      </div>
      <Link className="text-iconBlue" href="/">
        Show More
      </Link>
    </div>
  );
};

export default PopularTags;
