"use client";

import { acceptFollowRequest, rejectFollowRequest } from "@/lib/action";
import { FollowRequest, User } from "@prisma/client";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type FriendRequestListProps = FollowRequest & {
  sender: User;
};

export default function FriendRequestList({
  requests,
}: {
  requests: FriendRequestListProps[];
}) {
  const [requestState, setRequestState] = useState(requests);
  const [optimisticRequests, removeOptimisticRequest] = useOptimistic(
    requestState,
    (state, value: string) => state.filter((request) => request.id !== value),
  );

  const acceptRequest = async (requestId: string, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await acceptFollowRequest(userId);
      setRequestState((prevState) =>
        prevState.filter((request) => request.id !== requestId),
      );
    } catch (error) {
      console.error(error);
      throw new Error("Failed to accept request");
    }
  };
  const rejectRequest = async (requestId: string, userId: string) => {
    removeOptimisticRequest(requestId);
    try {
      await rejectFollowRequest(userId);
      setRequestState((prevState) =>
        prevState.filter((request) => request.id !== requestId),
      );
    } catch (error) {
      console.error(error);
      throw new Error("Failed to reject request");
    }
  };
  return (
    <div>
      {optimisticRequests.map((request: FriendRequestListProps) => (
        <div className="flex items-center justify-between" key={request.id}>
          <div className="flex items-center gap-4">
            <Image
              src={request.sender.avatar || "/noAvatar.png"}
              alt="sender avatar"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="font-semibold">
              {request.sender.firstname && request.sender.lastname
                ? request.sender.firstname + " " + request.sender.lastname
                : request.sender.username}
            </span>
          </div>
          <div className="flex justify-end gap-3">
            <form action={() => acceptRequest(request.id, request.senderId)}>
              <button>
                <Image
                  src="/accept.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
            <form action={() => rejectRequest(request.id, request.senderId)}>
              <button>
                <Image
                  src="/reject.png"
                  alt=""
                  width={20}
                  height={20}
                  className="cursor-pointer"
                />
              </button>
            </form>
          </div>
        </div>
      ))}
    </div>
  );
}
