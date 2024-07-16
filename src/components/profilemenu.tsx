import Image from "next/image";
import { Button } from "./ui/button";

export default function ProfileMenu() {
  return (
    <div className="flex flex-col gap-6 rounded-lg bg-white p-4 text-sm text-gray-500 shadow-md">
      <div className="relative h-20">
        <Image
          src={
            "https://images.pexels.com/photos/12613874/pexels-photo-12613874.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
          fill
          className="rounded-md object-cover"
        />
        <Image
          src={
            "https://images.pexels.com/photos/20343642/pexels-photo-20343642/free-photo-of-a-young-woman-standing-next-to-a-parked-motor-scooter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
          width={48}
          height={48}
          className="absolute -bottom-6 left-0 right-0 z-10 m-auto h-12 w-12 rounded-full object-cover ring-1 ring-white"
        />
      </div>
      <div className="flex h-20 flex-col items-center gap-2">
        <span className="font-semibold">Ava Addams</span>
        <div className="flex items-center gap-4">
          <div className="flex">
            <Image
              src={
                "https://images.pexels.com/photos/20343642/pexels-photo-20343642/free-photo-of-a-young-woman-standing-next-to-a-parked-motor-scooter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt=""
              width={12}
              height={12}
              className="h-3 w-3 rounded-full object-cover"
            />
            <Image
              src={
                "https://images.pexels.com/photos/20343642/pexels-photo-20343642/free-photo-of-a-young-woman-standing-next-to-a-parked-motor-scooter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt=""
              width={12}
              height={12}
              className="h-3 w-3 rounded-full object-cover"
            />
            <Image
              src={
                "https://images.pexels.com/photos/20343642/pexels-photo-20343642/free-photo-of-a-young-woman-standing-next-to-a-parked-motor-scooter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              }
              alt=""
              width={12}
              height={12}
              className="h-3 w-3 rounded-full object-cover"
            />
          </div>
          <span className="text-xs text-gray-500">500 Followers</span>
        </div>
        <Button className="rounded-md bg-blue-500 p-2 text-xs text-white">
          My Profile
        </Button>
      </div>
    </div>
  );
}
