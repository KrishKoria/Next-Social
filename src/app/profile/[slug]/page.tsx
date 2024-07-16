import Feed from "@/components/Feed";
import LeftMenu from "@/components/leftmenu";
import RightMenu from "@/components/rightmenu";
import Image from "next/image";

export default function ProfilePage({ params }: { params: { slug: string } }) {
  return (
    <div className="flex gap-6 pt-6">
      <div className="hidden w-[20%] xl:block">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center justify-center">
            <div className="relative h-64 w-full">
              <Image
                src="https://images.pexels.com/photos/26632788/pexels-photo-26632788/free-photo-of-a-woman-in-a-white-dress-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="profile"
                fill
                className="rounded-md object-cover"
              />
              <Image
                src="https://images.pexels.com/photos/26632788/pexels-photo-26632788/free-photo-of-a-woman-in-a-white-dress-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="profile"
                width={128}
                height={128}
                className="absolute -bottom-16 left-0 right-0 m-auto h-32 w-32 rounded-full border-4 border-white"
              />
            </div>
            <h1 className="mb-4 mt-20 text-2xl font-medium">Ava Addams</h1>
            <div className="mb-4 flex items-center justify-center gap-12">
              <div className="flex flex-col items-center">
                <span className="font-medium">123</span>
                <span className="text-sm">Posts</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">234</span>
                <span className="text-sm">Followers</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="font-medium">345</span>
                <span className="text-sm">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden w-[30%] lg:block">
        <RightMenu userId="test" />
      </div>
    </div>
  );
}
