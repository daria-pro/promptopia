"use client";
import Feed from "@components/Feed";
import { useEffect, useState } from "react";

async function getData() {
  const res = await fetch("/api/prompt");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      // const response = await fetch("/api/prompt", { cache: "no-store" });
      const response = await getData();
      console.log(response);

      setPosts(response);
    };
    fetchPosts();
  }, []);
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <Feed data={posts} />
    </section>
  );
};

export default Home;
