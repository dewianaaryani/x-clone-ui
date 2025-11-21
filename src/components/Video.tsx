"use client";
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

import { Video } from "@imagekit/next";
type VideoType = {
  path: string;
  className?: string;
};

const VideoComp = ({ path, className }: VideoType) => {
  return (
    <Video
      urlEndpoint={urlEndpoint}
      className={className}
      src={path}
      transformation={[
        { width: "1920", height: "1080", quality: 90 },
        // { overlay: { type: "text", text: "Hello, ImageKit!" } },
      ]}
      controls
    />
  );
};
export default VideoComp;
