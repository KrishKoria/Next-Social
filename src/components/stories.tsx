import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import StoryList from "./storyList";

export default async function Stories() {
  const { userId: currentUserId } = auth();
  if (!currentUserId) {
    return null;
  }
  const stories = await prisma.stories.findMany({
    where: {
      expiresAt: {
        gt: new Date(),
      },
      OR: [
        {
          user: {
            followers: {
              some: {
                followerId: currentUserId,
              },
            },
          },
        },
        {
          userId: currentUserId,
        },
      ],
    },
    include: {
      user: true,
    },
  });
  return (
    <div className="scrollbar-hide overflow-scroll rounded-lg bg-white p-4 text-base shadow-md">
      <div className="flex w-max gap-8">
        <StoryList stories={stories} userId={currentUserId} />
      </div>
    </div>
  );
}
