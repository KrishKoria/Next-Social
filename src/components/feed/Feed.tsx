import Post from "./posts";

export default function Feed() {
  return (
    <div className="flex flex-col gap-12 rounded-lg bg-white p-4 shadow-md">
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
}
