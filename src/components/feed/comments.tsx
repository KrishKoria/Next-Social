import Image from "next/image";

export default function Comments() {
  return (
    <div className="">
      <div className="flex items-center gap-4">
        <Image
          src={
            "https://images.pexels.com/photos/13724689/pexels-photo-13724689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          }
          alt=""
          width={32}
          height={32}
          className="h-8 w-8 rounded-full"
        />
        <div className="flex w-full flex-1 items-center justify-between rounded-xl bg-slate-100 px-6 py-2 text-sm">
          <input
            placeholder="Write a Comment!"
            type="text"
            className="flex-1 bg-transparent outline-none"
          />
          <Image
            src={"/emoji.png"}
            alt=""
            width={16}
            height={16}
            className="cursor-pointer"
          />
        </div>
      </div>
      <div className="">
        <div className="mt-6 flex justify-between gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/13724689/pexels-photo-13724689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full"
          />
          <div className="flex flex-1 flex-col gap-2">
            <span className="font-medium">Ava Addams</span>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
              aperiam totam accusantium illo laudantium! Unde illo iure
              praesentium! A illo omnis quod hic ipsum consequuntur vitae quae
              consequatur assumenda eveniet.
            </p>
            <div className="mt-2 flex items-center gap-8 text-xs text-gray-500">
              <div className="flex items-center gap-4">
                <Image
                  src={"/like.png"}
                  alt=""
                  width={12}
                  height={12}
                  className="h-4 w-4 cursor-pointer"
                />
                <span className="text-gray-300">|</span>
                <span className="text-gray-500">
                  123 <span className="hidden md:inline">Likes</span>
                </span>
              </div>
              <div className="">Reply</div>
            </div>
          </div>
          <Image
            src={"/more.png"}
            alt=""
            width={16}
            height={16}
            className="h-4 w-4 cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
