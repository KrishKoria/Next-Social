"use client";

import { addStory } from "@/lib/action";
import { useUser } from "@clerk/nextjs";
import { Stories, User } from "@prisma/client";
import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useOptimistic, useState } from "react";

type StoryProps = Stories & {
  user: User;
};

export default function StoryList({
  stories,
  userId,
}: {
  stories: StoryProps[];
  userId: string;
}) {
  const [storyList, setStoryList] = useState(stories);
  const [image, setimage] = useState<any>();

  const { user, isLoaded } = useUser();

  const add = async () => {
    if (!image?.secure_url) return;

    addOptimisticStory({
      id: "temp",
      image: image.secure_url,
      createdAt: new Date(Date.now()),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000),
      userId: userId,
      user: {
        id: userId,
        username: "Sending...",
        avatar: user?.imageUrl || "/noAvatar.png",
        cover: "",
        description: "",
        firstname: "",
        lastname: "",
        city: "",
        work: "",
        school: "",
        website: "",
        createdAt: new Date(Date.now()),
      },
    });

    try {
      const createdStory = await addStory(image.secure_url);
      setStoryList((prev) => [createdStory!, ...prev]);
      setimage(null);
    } catch (err) {}
  };

  const [optimisticStories, addOptimisticStory] = useOptimistic(
    storyList,
    (state, value: StoryProps) => [value, ...state],
  );
  return (
    <>
      <CldUploadWidget
        uploadPreset="social"
        onSuccess={(result, { widget }) => {
          setimage(result.info);
          widget.close();
        }}
      >
        {({ open }) => {
          return (
            <div className="relative flex cursor-pointer flex-col items-center gap-2">
              <Image
                src={image?.secure_url || user?.imageUrl || "/noAvatar.png"}
                alt="story image"
                width={80}
                height={80}
                className="h-20 w-20 rounded-full object-cover ring-2"
              />
              {image ? (
                <form action={add}>
                  <button className="rounded-md bg-blue-500 p-1 text-xs text-white">
                    Send
                  </button>
                </form>
              ) : (
                <span className="font-medium">Add a Story</span>
              )}
              <div
                className="absolute top-1 text-6xl text-gray-200"
                onClick={() => open()}
              >
                +
              </div>
            </div>
          );
        }}
      </CldUploadWidget>
      {/* STORY */}
      {optimisticStories.map((story) => (
        <div
          className="flex cursor-pointer flex-col items-center gap-2"
          key={story.id}
        >
          <Image
            src={story.user.avatar || "/noAvatar.png"}
            alt=""
            width={80}
            height={80}
            className="h-20 w-20 rounded-full ring-2"
          />
          <span className="font-medium">
            {story.user.firstname || story.user.username}
          </span>
        </div>
      ))}
    </>
  );
}
