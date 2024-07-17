import Feed from "@/components/feed/Feed";
import LeftMenu from "@/components/leftmenu/leftmenu";
import RightMenu from "@/components/rightmenu/rightmenu";
import prisma from "@/lib/client";
import { auth } from "@clerk/nextjs/server";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function ProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const user = await prisma.user.findFirst({
    where: {
      username: params.slug,
    },
    include: {
      _count: {
        select: { followers: true, following: true, posts: true },
      },
    },
  });
  if (!user) {
    return notFound();
  }
  const currentuserId = auth().userId;
  let isBlocked;
  if (currentuserId) {
    const res = await prisma.block.findFirst({
      where: {
        blockerId: user.id,
        blockedId: currentuserId,
      },
    });
    isBlocked = res ? true : false;
  }
  if (isBlocked) {
    return notFound();
  }
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden w-[20%] xl:block">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="relative h-64 w-full">
              <Image
                src={user.cover || "/noCover.png"}
                alt="cover"
                fill
                className="rounded-md object-cover"
              />
              <Image
                src={user.avatar || "/noAvatar.png"}
                alt="avatar"
                width={128}
                height={128}
                className="absolute -bottom-16 left-0 right-0 m-auto h-32 w-32 rounded-full border-4 border-white"
              />
            </div>
            <h1 className="mb-4 mt-20 text-2xl font-medium">
              {user.firstname && user.lastname
                ? user.firstname + " " + user.lastname
                : user.username}
            </h1>
            <div className="mb-4 flex items-center justify-center gap-12">
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.posts}</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.followers}</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">{user._count.following}</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed username={params.slug} />
        </div>
      </div>
      <div className="hidden w-[30%] lg:block">
        <RightMenu user={user} />
      </div>
    </div>
  );
}
