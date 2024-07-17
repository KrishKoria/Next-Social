import { User } from "@prisma/client";
import Ad from "../ad";
import Birthdays from "./birthdays";
import FriendRequest from "./friendrequests";
import UserInfo from "./userinfo";
import UserMedia from "./usermedia";
import { Suspense } from "react";

export default function RightMenu({ user }: { user?: User }) {
  return (
    <div className="flex flex-col gap-6">
      {user && (
        <>
          <Suspense fallback={<div>Loading...</div>}>
            <UserInfo user={user} />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <UserMedia user={user} />
          </Suspense>
        </>
      )}
      <FriendRequest />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
}
