"use client";
import { Button } from "../ui/button";

export default function UserInteraction({
  userId,
  currentUserId,
  isUserBlocked,
  isUserFollowing,
  isRequestSent,
}: {
  userId: string;
  currentUserId: string;
  isUserBlocked: boolean;
  isUserFollowing: boolean;
  isRequestSent: boolean;
}) {
  return (
    <>
      <form>
        <Button className="w-full rounded-md bg-blue-500 text-sm text-white">
          {isUserFollowing
            ? "Unfollow"
            : isRequestSent
              ? "Requested"
              : "Follow"}
        </Button>
      </form>
      <form className="self-center">
        <Button
          variant={"link"}
          className="cursor-pointer text-xs text-red-600"
        >
          {isUserBlocked ? "Unblock" : "Block"} User
        </Button>
      </form>
    </>
  );
}
