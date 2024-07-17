"use client";
import { switchFollowUnfollow } from "@/lib/action";
import { Button } from "../ui/button";
import { useOptimistic, useState } from "react";

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
  const [userState, setUserState] = useState({
    following: isUserFollowing,
    blocked: isUserBlocked,
    request: isRequestSent,
  });
  async function follow() {
    try {
      switchOptimisticFollow("");
      await switchFollowUnfollow(userId);
      setUserState((prevState) => ({
        ...prevState,
        following: prevState.following && false,
        request: !prevState.following && !prevState.request ? true : false,
      }));
    } catch (error) {
      console.log(error);
    }
  }

  const [optimisticFollow, switchOptimisticFollow] = useOptimistic(
    userState,
    (state) => {
      return {
        ...state,
        following: state.following && false,
        request: !state.following && !state.request ? true : false,
      };
    },
  );
  return (
    <>
      <form action={follow}>
        <Button className="w-full rounded-md bg-blue-500 text-sm text-white">
          {optimisticFollow.following
            ? "Unfollow"
            : optimisticFollow.request
              ? "Requested"
              : "Follow"}
        </Button>
      </form>
      <form className="self-center">
        <Button
          variant={"link"}
          className="cursor-pointer text-xs text-red-600"
        >
          {optimisticFollow.blocked ? "Unblock" : "Block"} User
        </Button>
      </form>
    </>
  );
}
