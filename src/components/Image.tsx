"use client";
import { Image } from "@imagekit/next";
import React from "react";
type ImageType = {
  path: string;
  w?: number;
  h?: number;
  alt: string;
  className?: string;
  tr?: boolean;
};
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const ImageComp = ({ path, w, h, alt, className, tr }: ImageType) => {
  return (
    <Image
      src={path}
      urlEndpoint={urlEndpoint}
      width={w} // SELALU KIRIM INI
      height={h} // SELALU KIRIM INI
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
      loading="lazy"
      alt={alt}
      className={className}
    />
  );
};

export default ImageComp;
