"use client";
import { useUser } from "@clerk/nextjs";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";
import AddPostButton from "./addpostbutton";
import { addPost } from "@/lib/action";

export default function AddPosts() {
  const { isLoaded, user } = useUser();
  const [desc, setDesc] = useState("");
  const [image, setImage] = useState<any>();
  if (!isLoaded) {
    return "Loading...";
  }
  return (
    <div className="flex justify-between gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
      {/* Avatar */}
      <Image
        src={user?.imageUrl || "/noAvatar.png"}
        alt="user avatar"
        className="h-12 w-12 rounded-full object-cover"
        width={48}
        height={48}
      />
      {/* Post */}
      <div className="flex-1">
        <form
          action={(formdata) => addPost(formdata, image?.secure_url || "")}
          className="flex gap-4"
        >
          <textarea
            name="desc"
            className="flex-1 rounded-lg bg-slate-100 p-2"
            placeholder="Whats on your mind..."
            onChange={(e) => setDesc(e.target.value)}
          ></textarea>
          <div className="">
            <Image
              src={"/emoji.png"}
              alt="add emoji"
              className="h-5 w-5 cursor-pointer self-end"
              width={20}
              height={20}
            />
            <AddPostButton />
          </div>
        </form>
        <div className="mt-4 flex flex-wrap items-center gap-4 text-gray-400">
          <CldUploadWidget
            uploadPreset="social"
            onSuccess={(result, { widget }) => {
              setImage(result.info);
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <div
                  className="flex cursor-pointer items-center gap-2"
                  onClick={() => open()}
                >
                  <Image
                    src={"/addimage.png"}
                    alt=""
                    className="h-5 w-5 cursor-pointer self-end"
                    width={20}
                    height={20}
                  />
                  Photos
                </div>
              );
            }}
          </CldUploadWidget>

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
