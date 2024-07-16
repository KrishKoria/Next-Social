import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

export default function UserInfo({ userId }: { userId?: string }) {
  return (
    <Card className="rounded-lg bg-white shadow-md">
      <CardHeader>
        <CardTitle className="text-base">
          <div className="flex items-center justify-between font-medium">
            <span className="font-semibold text-gray-500">
              User Information
            </span>
            <Link href="/" className="text-xs text-blue-500">
              See all
            </Link>
          </div>
        </CardTitle>
        <div className="flex flex-col gap-2 text-gray-500">
          <div className="flex items-center gap-1">
            <span className="text-xl text-black">Ava Addams</span>
            <span className="text-sm">@Ava_Addams</span>
          </div>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
            nisi velit animi tempora voluptas quidem ipsum est officia quibusdam
            facilis ab aut dolorem quaerat earum.
          </p>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 text-gray-500">
        <div className="flex items-center gap-2">
          <Image src={"/map.png"} alt="" width={16} height={16} />
          <span className="text-sm">
            Living in <b>Florida</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={"/school.png"} alt="" width={16} height={16} />
          <span className="text-sm">
            Went to <b>Pornhub High School</b>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Image src={"/work.png"} alt="" width={16} height={16} />
          <span className="text-sm">
            Works at <b>Pornhub</b>
          </span>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <div className="flex items-center gap-1">
          <Image src={"/link.png"} alt="" width={16} height={16} />
          <Link href="/" className="text-sm font-medium text-blue-500">
            avaaddams.com
          </Link>
        </div>
        <div className="flex items-center gap-1">
          <Image src={"/date.png"} alt="" width={16} height={16} />
          <span className="text-sm">Joined July 2024</span>
        </div>
      </CardFooter>
      <div className="mx-6 flex flex-col">
        <Button className="rounded-md bg-blue-500 text-sm text-white">
          Follow
        </Button>
        <span className="cursor-pointer self-end p-4 text-xs text-red-600">
          Block User
        </span>
      </div>
    </Card>
  );
}
