import Image from "next/image";
import Comments from "./comments";
import { Post as PostType, User } from "@prisma/client";
import PostInteraction from "./PostInteraction";
import { Suspense } from "react";
import PostInfo from "./postinfo";
import { auth } from "@clerk/nextjs/server";

type PostProps = PostType & { user: User } & { likes: [{ userId: string }] } & {
  _count: { Comment: number };
};

export default function Post({ post }: { post: PostProps }) {
  const { userId } = auth();
  return (
    <div className="flex flex-col gap-4">
      {/* User */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={post.user.avatar || "./noAvatar.png"}
            alt="user avatar"
            className="h-10 w-10 rounded-full"
            width={48}
            height={48}
          />
          <span className="font-medium">
            {" "}
            {post.user.firstname && post.user.lastname
              ? post.user.firstname + " " + post.user.lastname
              : post.user.username}
          </span>
        </div>
        {userId === post.user.id && <PostInfo postId={post.id} />}
      </div>
      {/* Content */}
      <div className="flex flex-col gap-4">
        {post.image && (
          <div className="relative min-h-96 w-full">
            <Image
              src={post.image}
              alt=""
              fill
              className="rounded-md object-cover"
            />
          </div>
        )}
        <p>{post.desc}</p>
      </div>
      {/* Actions */}
      <Suspense fallback={<div>Loading...</div>}>
        <PostInteraction
          postId={post.id}
          likes={post.likes.map((like) => like.userId)}
          comments={post._count.Comment}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Comments postId={post.id} />
      </Suspense>
    </div>
  );
}
