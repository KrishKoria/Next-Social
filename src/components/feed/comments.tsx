import prisma from "@/lib/client";
import Image from "next/image";
import CommentList from "./commentList";

export default async function Comments({ postId }: { postId: string }) {
  const comments = await prisma.comment.findMany({
    where: {
      postId,
    },
    include: {
      user: true,
    },
  });
  return (
    <div className="">
      <CommentList comments={comments} postId={postId} />
    </div>
  );
}
