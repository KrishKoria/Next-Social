"use client";
import { addComment } from "@/lib/action";
import { useUser } from "@clerk/nextjs";
import { Comment, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type CommentProps = Comment & {
  user: User;
};

export default function CommentList({
  comments,
  postId,
}: {
  comments: CommentProps[];
  postId: string;
}) {
  const { user } = useUser();
  const [commentState, setCommentState] = useState(comments);
  const [desc, setDesc] = useState("");
  const [optimisticComment, addOptimisticComment] = useOptimistic(
    commentState,
    (state, value: CommentProps) => [value, ...state],
  );
  async function newComment() {
    if (!user || !desc) return;
    addOptimisticComment({
      id: "sending",
      desc,
      createdAt: new Date(Date.now()),
      updatedAt: new Date(Date.now()),
      userId: user.id,
      postId: postId,
      user: {
        id: user.id,
        username: "Sending Please Wait...",
        avatar: user.imageUrl || "/noAvatar.png",
        cover: "",
        description: "",
        firstname: "",
        lastname: "",
        city: "",
        work: "",
        school: "",
        website: "",
        createdAt: new Date(Date.now()),
      },
    });
    try {
      const createdComment = await addComment(postId, desc);
      setCommentState((state) => [createdComment, ...state]);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <>
      {user && (
        <div className="flex items-center gap-4">
          <Image
            src={user.imageUrl || "/noAvatar.png"}
            alt="user avatar"
            width={32}
            height={32}
            className="h-8 w-8 rounded-full"
          />
          <form
            action={newComment}
            className="flex w-full flex-1 items-center justify-between rounded-xl bg-slate-100 px-6 py-2 text-sm"
          >
            <input
              placeholder="Write a Comment!"
              type="text"
              className="flex-1 bg-transparent outline-none"
              onChange={(e) => setDesc(e.target.value)}
            />
            <Image
              src={"/emoji.png"}
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
          </form>
        </div>
      )}
      <div className="">
        {optimisticComment.map((comment) => (
          <div className="mt-6 flex justify-between gap-4" key={comment.id}>
            <Image
              src={comment.user.avatar || "/noAvatar.png"}
              alt="user avatar"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full"
            />
            <div className="flex flex-1 flex-col gap-2">
              <span className="font-medium">
                {comment.user.firstname && comment.user.lastname
                  ? comment.user.firstname + " " + comment.user.lastname
                  : comment.user.username}
              </span>
              <p>{comment.desc}</p>
              <div className="mt-2 flex items-center gap-8 text-xs text-gray-500">
                <div className="flex items-center gap-4">
                  <Image
                    src={"/like.png"}
                    alt=""
                    width={12}
                    height={12}
                    className="h-4 w-4 cursor-pointer"
                  />
                  <span className="text-gray-300">|</span>
                  <span className="text-gray-500">
                    123 <span className="hidden md:inline">Likes</span>
                  </span>
                </div>
                <div className="">Reply</div>
              </div>
            </div>
            <Image
              src={"/more.png"}
              alt=""
              width={16}
              height={16}
              className="h-4 w-4 cursor-pointer"
            />
          </div>
        ))}
      </div>
    </>
  );
}
