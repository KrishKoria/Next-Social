import Ad from "./ad";
import Birthdays from "./birthdays";
import FriendRequest from "./friendrequests";

export default function RightMenu({ userId }: { userId?: string }) {
  return (
    <div className="flex flex-col gap-6">
      <FriendRequest />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
}
