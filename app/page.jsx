"use client";
import Feed from "@components/Feed";
import { Suspense } from "react";
import useSWR from "swr";
const fetcher = (...args) =>
  fetch(...args, { cache: "no-store" }).then((res) => res.json());

const Home = () => {
  const { data, error, isLoading } = useSWR("/api/prompt", fetcher);

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
      {!isLoading && (
        <Suspense fallback={<div>Loading...</div>}>
          <Feed data={data} isLoading={isLoading} />
        </Suspense>
      )}
    </section>
  );
};

export default Home;
