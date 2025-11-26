import Feed from "@/components/Feed";
import ImageComp from "@/components/Image";
import Link from "next/link";
import React from "react";
import { prisma } from "../../../../lib/prisma";
import { notFound } from "next/navigation";

const page = async ({ params }: { params: { username: string } }) => {
  const user = await prisma.user.findUnique({
    where: { username: params.username },
  });
  if (!user) return notFound();
  return (
    <div>
      <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
        <Link href="/">
          <ImageComp path="x-clone/icons/back.svg" alt="" w={24} h={24} />
        </Link>
        <h1 className="font-bold text-lg">Dewiana</h1>
      </div>
      {/* Info */}
      <div className="">
        <div className="relative">
          <div className="w-full aspect-[3/1] relative">
            <ImageComp
              path="x-clone/general/cover.jpg"
              alt=""
              w={600}
              h={200}
              tr={true}
            />
          </div>
          <div className="w-1/5 aspect-square absolute left-4 -translate-y-1/2 rounded-full overflow-hidden border-4 border-black bg-gray-300">
            <ImageComp
              path="x-clone/general/avatar.png"
              alt=""
              w={100}
              h={100}
              tr={true}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-end gap-2 p-2">
          <div className="w-9 h-9 flex justify-center items-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <ImageComp path="x-clone/icons/more.svg" alt="" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex justify-center items-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <ImageComp path="x-clone/icons/explore.svg" alt="" w={20} h={20} />
          </div>
          <div className="w-9 h-9 flex justify-center items-center rounded-full border-[1px] border-gray-500 cursor-pointer">
            <ImageComp path="x-clone/icons/message.svg" alt="" w={20} h={20} />
          </div>
          <button className="bg-white text-black font-bold rounded-full py-2 px-4">
            Follow
          </button>
        </div>
        {/* user detialls */}
        <div className="p-4 flex flex-col gap-2">
          <div className="">
            <h1 className="text-2xl font-bold">Dewiana</h1>
            <span className="text-textGray text-sm">@dewianaaryani</span>
          </div>
          <p>Dewiana Aryani Rahmat</p>
          <div className="flex gap-4 text-textGray text-[15px]">
            <div className="flex items-center gap-2">
              <ImageComp
                path="x-clone/icons/userLocation.svg"
                alt=""
                w={20}
                h={20}
              />
              <span>Jakarta, Indonesia</span>
            </div>
            <div className="flex items-center gap-2">
              <ImageComp path="x-clone/icons/date.svg" alt="" w={20} h={20} />
              <span>Joined 2022</span>
            </div>
          </div>
          {/* Following and followers */}
          <div className="flex gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Followers</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-bold">100</span>
              <span className="text-textGray text-[15px]">Following</span>
            </div>
          </div>
        </div>
      </div>
      <Feed userProfileId={user.id} />
    </div>
  );
};

export default page;
