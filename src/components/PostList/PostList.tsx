import { PostProps } from "@/types/types";
import PostCard from "../postCard/PostCard";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const PostList = async () => {
  const data = await getData();
  return (
    <div className="postList">
      {/* <PostCard title="title" body="desc" /> */}
      {data.map((post: PostProps) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};
export default PostList;
