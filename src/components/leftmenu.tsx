import Link from "next/link";
import ProfileMenu from "./profilemenu";
import Image from "next/image";
import Ad from "./ad";

export default function LeftMenu({ type }: { type: "home" | "profile" }) {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileMenu />}
      <div className="flex flex-col gap-2 rounded-lg bg-white p-4 text-sm text-gray-500 shadow-md">
        <Link
          href="/"
          className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src={"/posts.png"} alt="" width={24} height={24} />
          <span>My Posts</span>
        </Link>
        <hr className="border-t-1 w-36 self-center border-gray-50" />
        <Link
          href="/"
          className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src={"/activity.png"} alt="" width={24} height={24} />
          <span>Activity</span>
        </Link>
        <hr className="border-t-1 w-36 self-center border-gray-50" />
        <Link
          href="/"
          className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src={"/market.png"} alt="" width={24} height={24} />
          <span>Marketplace</span>
        </Link>
        <hr className="border-t-1 w-36 self-center border-gray-50" />
        <Link
          href="/"
          className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src={"/events.png"} alt="" width={24} height={24} />
          <span>Events</span>
        </Link>
        <hr className="border-t-1 w-36 self-center border-gray-50" />
        <Link
          href="/"
          className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src={"/albums.png"} alt="" width={24} height={24} />
          <span>Albums</span>
        </Link>
        <hr className="border-t-1 w-36 self-center border-gray-50" />
        <Link
          href="/"
          className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src={"/videos.png"} alt="" width={24} height={24} />
          <span>Videos</span>
        </Link>
        <hr className="border-t-1 w-36 self-center border-gray-50" />
        <Link
          href="/"
          className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src={"/posts.png"} alt="" width={24} height={24} />
          <span>News</span>
        </Link>
        <hr className="border-t-1 w-36 self-center border-gray-50" />
        <Link
          href="/"
          className="flex items-center gap-4 rounded-lg p-2 hover:bg-slate-100"
        >
          <Image src={"/settings.png"} alt="" width={24} height={24} />
          <span>Settings</span>
        </Link>
      </div>
      <Ad size="sm" />
    </div>
  );
}
