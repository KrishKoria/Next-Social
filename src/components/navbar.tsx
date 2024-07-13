import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./mobilemenu";

export default function Navbar() {
  return (
    <div className="flex h-24 items-center justify-between">
      {/* left */}
      <div className="md:hidden lg:block">
        <Link href="/" className="text-xl font-bold text-blue-600">
          NextSocial
        </Link>
      </div>
      {/* Center */}
      <div className="hidden text-sm md:flex">
        <div className="flex gap-6 text-gray-600">
          <Link href={"/"} className="flex items-center gap-2">
            <Image
              src={"/home.png"}
              alt="Home"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span>Home</span>
          </Link>
          <Link href={"/friends"} className="flex items-center gap-2">
            <Image
              src={"/friends.png"}
              alt="Home"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span>Friends</span>
          </Link>
          <Link href={"/stories"} className="flex items-center gap-2">
            <Image
              src={"/stories.png"}
              alt="Home"
              width={16}
              height={16}
              className="h-4 w-4"
            />
            <span>Stories</span>
          </Link>
        </div>
      </div>
      {/* Right */}
      <div className="flex w-[30%] items-center justify-end gap-4 xl:gap-8">
        <MobileMenu />
      </div>
    </div>
  );
}
