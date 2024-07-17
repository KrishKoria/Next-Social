"use client";

import Image from "next/image";
import { useAuth } from "@clerk/nextjs";
import { useOptimistic, useState } from "react";
import { switchLike } from "@/lib/action";

export default function PostInteraction({
  postId,
  likes,
  comments,
}: {
  postId: string;
  likes: string[];
  comments: number;
}) {
  const { isLoaded, userId } = useAuth();
  const [liked, setLiked] = useState({
    isLiked: userId ? likes.includes(userId) : false,
    likeCount: likes.length,
  });

  const [optimisticLike, switchOptimisticLike] = useOptimistic(
    liked,
    (state, value) => {
      return {
        isLiked: !state.isLiked,
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
      };
    },
  );

  async function likeAction() {
    switchOptimisticLike("");
    try {
      switchLike(postId);
      setLiked((state) => ({
        isLiked: !state.isLiked,
        likeCount: state.isLiked ? state.likeCount - 1 : state.likeCount + 1,
      }));
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
  return (
    <div className="my-4 flex items-center justify-between text-sm">
      <div className="flex gap-8">
        <div className="flex items-center gap-2 rounded-xl bg-slate-200 p-2">
          <form action={likeAction}>
            <button>
              <Image
                src={optimisticLike.isLiked ? "/liked.png" : "/like.png"}
                alt=""
                width={16}
                height={16}
                className="cursor-pointer"
              />
            </button>
          </form>
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            {optimisticLike.likeCount}{" "}
            <span className="hidden md:inline">Likes</span>
          </span>
        </div>
        <div className="flex items-center gap-2 rounded-xl bg-slate-200 p-2">
          <Image
            src={"/comment.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            123 <span className="hidden md:inline">Comments</span>
          </span>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-2 rounded-xl bg-slate-200 p-2">
          <Image
            src={"/share.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
          <span className="text-gray-300">|</span>
          <span className="text-gray-500">
            <span className="hidden md:inline">Share</span>
          </span>
        </div>
      </div>
    </div>
  );
}
