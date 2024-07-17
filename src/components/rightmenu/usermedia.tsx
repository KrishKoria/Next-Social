import prisma from "@/lib/client";
import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default async function UserMedia({ user }: { user: User }) {
  const postsWithMedia = await prisma.post.findMany({
    where: {
      userId: user.id,
      image: {
        not: null,
      },
    },
    take: 12,
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-xs text-blue-500">
          See all
        </Link>
      </div>
      <div className="flex flex-wrap justify-between gap-4">
        {postsWithMedia.length
          ? postsWithMedia.map((post) => (
              <div className="relative h-24 w-1/5" key={post.id}>
                <Image
                  src={post.image!}
                  alt=""
                  fill
                  className="rounded-md object-cover"
                />
              </div>
            ))
          : "No Media Found"}
      </div>
    </div>
  );
}
