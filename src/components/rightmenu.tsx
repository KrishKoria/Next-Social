import Ad from "./ad";
import Birthdays from "./birthdays";
import FriendRequest from "./friendrequests";
import UserInfo from "./userinfo";
import UserMedia from "./usermedia";

export default function RightMenu({ userId }: { userId?: string }) {
  return (
    <div className="flex flex-col gap-6">
      {userId && (
        <>
          <UserInfo userId={userId} />
          <UserMedia userId={userId} />
        </>
      )}
      <FriendRequest />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
}
