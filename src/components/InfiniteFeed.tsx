"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
const fetchPosts = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  return res.json();
};

const InfiniteFeed = ({ userProfileId }: { userProfileId?: string }) => {
  const posts = useQuery({ queryKey: ["posts"], queryFn: fetchPosts });
  console.log(posts);

  return <div>InfiniteFeed</div>;
};

export default InfiniteFeed;
