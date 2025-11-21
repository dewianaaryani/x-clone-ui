import Link from "next/link";
import React from "react";
import ImageComp from "./Image";

const Recommendations = () => {
  return (
    <div className="p-4 rounded-2xl border-[1px] border-borderGray flex flex-col gap-4">
      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <ImageComp
              path="x-clone/general/avatar.png"
              alt=""
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div>
            <h1 className="text-md font-bold">Dadang</h1>
            <span className="text-textGray text-sm">@dadang</span>
          </div>
        </div>

        {/* Button */}
        <button className="bg-white text-black font-semibold rounded-full py-1 px-4">
          Follow
        </button>
      </div>
      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <ImageComp
              path="x-clone/general/avatar.png"
              alt=""
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div>
            <h1 className="text-md font-bold">Dadang</h1>
            <span className="text-textGray text-sm">@dadang</span>
          </div>
        </div>

        {/* Button */}
        <button className="bg-white text-black font-semibold rounded-full py-1 px-4">
          Follow
        </button>
      </div>
      <div className="flex items-center justify-between">
        {/* IMAGE AND USER INFO */}
        <div className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
            <ImageComp
              path="x-clone/general/avatar.png"
              alt=""
              w={100}
              h={100}
              tr={true}
            />
          </div>
          <div>
            <h1 className="text-md font-bold">Dadang</h1>
            <span className="text-textGray text-sm">@dadang</span>
          </div>
        </div>

        {/* Button */}
        <button className="bg-white text-black font-semibold rounded-full py-1 px-4">
          Follow
        </button>
      </div>

      <Link className="text-iconBlue" href="/">
        Show More
      </Link>
    </div>
  );
};

export default Recommendations;
