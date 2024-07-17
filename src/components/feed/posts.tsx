import Image from "next/image";
import Comments from "./comments";
import { Post as PostType, User } from "@prisma/client";
import PostInteraction from "./PostInteraction";

type PostProps = PostType & { user: User } & { likes: [{ userId: string }] } & {
  _count: { Comment: number };
};

export default function Post({ post }: { post: PostProps }) {
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
        <Image src={"/more.png"} alt="" width={16} height={16} />
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
      <PostInteraction
        postId={post.id}
        likes={post.likes.map((like) => like.userId)}
        comments={post._count.Comment}
      />
      <Comments />
    </div>
  );
}
