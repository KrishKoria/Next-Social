"use client";

import { deletePost } from "@/lib/action";
import Image from "next/image";
import { useState } from "react";

export default function PostInfo({ postId }: { postId: string }) {
  const [open, setOpen] = useState(false);

  const deletePostWithId = deletePost.bind(null, postId);
  return (
    <div className="relative">
      <Image
        src="/more.png"
        width={16}
        height={16}
        alt=""
        onClick={() => setOpen((prev) => !prev)}
        className="cursor-pointer"
      />
      {open && (
        <div className="absolute right-0 top-4 z-30 flex w-32 flex-col gap-2 rounded-lg bg-white p-4 text-xs shadow-lg">
          <span className="cursor-pointer">View</span>
          <span className="cursor-pointer">Re-post</span>
          <form action={deletePostWithId}>
            <button className="text-red-500">Delete</button>
          </form>
        </div>
      )}
    </div>
  );
}
