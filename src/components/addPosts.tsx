import Image from "next/image";

export default function AddPosts() {
  return (
    <div className="flex justify-between gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
      {/* Avatar */}
      <Image
        src={
          "https://images.pexels.com/photos/26632788/pexels-photo-26632788/free-photo-of-a-woman-in-a-white-dress-standing-in-a-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        alt=""
        className="h-12 w-12 rounded-full object-cover"
        width={48}
        height={48}
      />
      {/* Post */}
      <div className="flex-1">
        <div className="flex gap-4">
          <textarea
            name=""
            id=""
            className="flex-1 rounded-lg bg-slate-100 p-2"
            placeholder="Whats on your mind..."
          ></textarea>
          <Image
            src={"/emoji.png"}
            alt=""
            className="h-5 w-5 cursor-pointer self-end"
            width={20}
            height={20}
          />
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-gray-400">
          <div className="flex cursor-pointer items-center gap-2">
            <Image
              src={"/addimage.png"}
              alt=""
              className="h-5 w-5 cursor-pointer self-end"
              width={20}
              height={20}
            />
            Photos
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <Image
              src={"/addVideo.png"}
              alt=""
              className="h-5 w-5 cursor-pointer self-end"
              width={20}
              height={20}
            />
            Videos
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <Image
              src={"/addevent.png"}
              alt=""
              className="h-5 w-5 cursor-pointer self-end"
              width={20}
              height={20}
            />
            Events
          </div>
          <div className="flex cursor-pointer items-center gap-2">
            <Image
              src={"/poll.png"}
              alt=""
              className="h-5 w-5 cursor-pointer self-end"
              width={20}
              height={20}
            />
            Poll
          </div>
        </div>
      </div>
    </div>
  );
}
