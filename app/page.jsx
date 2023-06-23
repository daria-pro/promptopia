import Feed from "@components/Feed";

export default async function () {
  const response = await fetch(`${process.env.REQUEST_URL}/api/prompt`, {
    cache: "no-store",
  });
  const data = await response.json();
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     // const response = await fetch("/api/prompt", { cache: "no-store" });
  //     const response = await getData();
  //     console.log(response);

  //     setPosts(response);
  //   };
  //   fetchPosts();
  // }, []);
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
      <Feed data={data} />
    </section>
  );
}
