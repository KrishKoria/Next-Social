"use client";
import { switchBlockUnblock, switchFollowUnfollow } from "@/lib/action";
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
      switchoptimisticState("follow");
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

  async function block() {
    try {
      switchoptimisticState("block");
      await switchBlockUnblock(userId);
      setUserState((prevState) => ({
        ...prevState,
        blocked: !prevState.blocked,
      }));
    } catch (error) {
      console.log(error);
    }
  }

  const [optimisticState, switchoptimisticState] = useOptimistic(
    userState,
    (
      state,
      value: "follow" | "block",
    ): { following: boolean; blocked: boolean; request: boolean } => {
      return value === "follow"
        ? {
            ...state,
            following: state.following && false,
            request: !state.following && !state.request ? true : false,
          }
        : { ...state, blocked: !state.blocked };
    },
  );
  return (
    <>
      <form action={follow}>
        <Button className="w-full rounded-md bg-blue-500 text-sm text-white">
          {optimisticState.following
            ? "Unfollow"
            : optimisticState.request
              ? "Requested"
              : "Follow"}
        </Button>
      </form>
      <form className="self-center" action={block}>
        <Button
          variant={"link"}
          className="cursor-pointer text-xs text-red-600"
        >
          {optimisticState.blocked ? "Unblock" : "Block"} User
        </Button>
      </form>
    </>
  );
}
