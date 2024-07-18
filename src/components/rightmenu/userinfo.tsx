import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { User } from "@prisma/client";
import { auth } from "@clerk/nextjs/server";
import prisma from "@/lib/client";
import UserInteraction from "./UserInteraction";
import UpdateUser from "./updateUser";

export default async function UserInfo({ user }: { user: User }) {
  const createdDate = new Date(user.createdAt);
  const formattedDate = createdDate.toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  let isBlocked = false;
  let isFollowing = false;
  let isFollowingRequestSent = false;

  const { userId: currentuserId } = auth();
  if (currentuserId) {
    const blockres = await prisma.block.findFirst({
      where: { blockerId: currentuserId, blockedId: user.id },
    });
    isBlocked = blockres ? true : false;
    const followres = await prisma.follow.findFirst({
      where: { followerId: currentuserId, followingId: user.id },
    });
    isFollowing = followres ? true : false;
    const followrequestres = await prisma.followRequest.findFirst({
      where: { senderId: currentuserId, receiverId: user.id },
    });
    isFollowingRequestSent = followrequestres ? true : false;
  }
  return (
    <Card className="rounded-lg bg-white shadow-md">
      <CardHeader>
        <CardTitle className="text-base">
          <div className="flex items-center justify-between font-medium">
            <span className="font-semibold text-gray-500">
              User Information
            </span>
            {currentuserId === user.id ? (
              <UpdateUser user={user} />
            ) : (
              <Link href="/" className="text-xs text-blue-500">
                See all
              </Link>
            )}
          </div>
        </CardTitle>
        <div className="flex flex-col gap-2 text-gray-500">
          <div className="flex items-center gap-1">
            <span className="text-xl text-black">
              {user.firstname && user.lastname
                ? user.firstname + " " + user.lastname
                : user.username}
            </span>
            <span className="text-sm">@{user.username}</span>
          </div>
          {user.description && <p className="text-sm">{user.description}</p>}
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 text-gray-500">
        {user.city && (
          <div className="flex items-center gap-2">
            <Image src={"/map.png"} alt="" width={16} height={16} />
            <span className="text-sm">
              Living in <b>{user.city}</b>
            </span>
          </div>
        )}
        {user.school && (
          <div className="flex items-center gap-2">
            <Image src={"/school.png"} alt="" width={16} height={16} />
            <span className="text-sm">
              Went to <b>{user.school}</b>
            </span>
          </div>
        )}
        {user.work && (
          <div className="flex items-center gap-2">
            <Image src={"/work.png"} alt="" width={16} height={16} />
            <span className="text-sm">
              Works at <b>{user.work}</b>
            </span>
          </div>
        )}
      </CardContent>
      <CardFooter className="justify-between">
        {user.website && (
          <div className="flex items-center gap-1">
            <Image src={"/link.png"} alt="" width={16} height={16} />
            <Link
              href={user.website}
              className="text-sm font-medium text-blue-500"
            >
              {user.website}
            </Link>
          </div>
        )}
        <div className="flex items-center gap-1">
          <Image src={"/date.png"} alt="" width={16} height={16} />
          <span className="text-sm text-gray-500">Joined {formattedDate}</span>
        </div>
      </CardFooter>
      {currentuserId && currentuserId !== user.id && (
        <div className="mx-6 flex flex-col">
          <UserInteraction
            userId={user.id}
            isUserBlocked={isBlocked}
            isUserFollowing={isFollowing}
            isRequestSent={isFollowingRequestSent}
          />
        </div>
      )}
    </Card>
  );
}
