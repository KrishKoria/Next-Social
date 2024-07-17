import { User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function UserMedia({ user }: { user?: User }) {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">User Media</span>
        <Link href="/" className="text-xs text-blue-500">
          See all
        </Link>
      </div>
      <div className="flex flex-wrap justify-between gap-4">
        <div className="relative h-24 w-1/5">
          <Image
            src={
              "https://images.pexels.com/photos/14350470/pexels-photo-14350470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className="rounded-md object-cover"
          ></Image>
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src={
              "https://images.pexels.com/photos/14350470/pexels-photo-14350470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className="rounded-md object-cover"
          ></Image>
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src={
              "https://images.pexels.com/photos/14350470/pexels-photo-14350470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className="rounded-md object-cover"
          ></Image>
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src={
              "https://images.pexels.com/photos/14350470/pexels-photo-14350470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className="rounded-md object-cover"
          ></Image>
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src={
              "https://images.pexels.com/photos/14350470/pexels-photo-14350470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className="rounded-md object-cover"
          ></Image>
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src={
              "https://images.pexels.com/photos/14350470/pexels-photo-14350470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className="rounded-md object-cover"
          ></Image>
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src={
              "https://images.pexels.com/photos/14350470/pexels-photo-14350470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className="rounded-md object-cover"
          ></Image>
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src={
              "https://images.pexels.com/photos/14350470/pexels-photo-14350470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className="rounded-md object-cover"
          ></Image>
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src={
              "https://images.pexels.com/photos/14350470/pexels-photo-14350470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className="rounded-md object-cover"
          ></Image>
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src={
              "https://images.pexels.com/photos/14350470/pexels-photo-14350470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className="rounded-md object-cover"
          ></Image>
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src={
              "https://images.pexels.com/photos/14350470/pexels-photo-14350470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className="rounded-md object-cover"
          ></Image>
        </div>
        <div className="relative h-24 w-1/5">
          <Image
            src={
              "https://images.pexels.com/photos/14350470/pexels-photo-14350470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className="rounded-md object-cover"
          ></Image>
        </div>
      </div>
    </div>
  );
}
