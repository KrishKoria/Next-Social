import { auth } from "@clerk/nextjs/server";
import Post from "./posts";
import prisma from "@/lib/client";

export default async function Feed({ username }: { username?: string }) {
  const { userId } = auth();
  let posts: any[] = [];
  if (username) {
    posts = await prisma.post.findMany({
      where: {
        user: {
          username: username,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            Comment: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  if (!username && userId) {
    const following = await prisma.follow.findMany({
      where: {
        followerId: userId,
      },
      select: {
        followingId: true,
      },
    });
    const followingIds = following.map((follow) => follow.followingId);
    posts = await prisma.post.findMany({
      where: {
        userId: {
          in: followingIds,
        },
      },
      include: {
        user: true,
        likes: {
          select: {
            userId: true,
          },
        },
        _count: {
          select: {
            Comment: true,
          },
        },
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  }
  return (
    <div className="flex flex-col gap-12 rounded-lg bg-white p-4 shadow-md">
      {posts?.length
        ? posts.map((post) => <Post key={post.id} post={post} />)
        : "No posts found"}
    </div>
  );
}
