import Image from "next/image";

export default function Post() {
  return (
    <div className="flex flex-col gap-4">
      {/* User */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={
              "https://images.pexels.com/photos/27091208/pexels-photo-27091208/free-photo-of-a-woman-holding-up-two-slices-of-lemon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            className="h-10 w-10 rounded-full"
            width={48}
            height={48}
          />
          <span className="font-medium">Ava Addams</span>
        </div>
        <Image src={"/more.png"} alt="" width={16} height={16} />
      </div>
      {/* Content */}
      <div className="felx flex-col gap-4">
        <div className="relative min-h-96 w-full">
          <Image
            src={
              "https://images.pexels.com/photos/19823330/pexels-photo-19823330/free-photo-of-young-woman-in-a-fashionable-outfit-with-cowboy-boots-posing-in-the-desert.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }
            alt=""
            fill
            className="rounded-md object-cover"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in
          elit convallis, consequat felis iaculis, scelerisque tortor. Donec
          pretium, odio et laoreet ornare, nulla metus mollis mi, eu elementum
          nisi augue commodo augue. Pellentesque sit amet urna mi. Curabitur eu
          lorem laoreet, eleifend dolor sit amet, aliquet mauris. Nulla
          condimentum ipsum vitae venenatis ullamcorper. Sed nec bibendum nunc.
          Quisque non commodo nulla. Vestibulum rhoncus mattis libero, et
          eleifend odio. Nullam rutrum lacinia fermentum. Quisque ullamcorper,
          ipsum et ultrices cursus, odio massa egestas nunc, eu blandit ante
          purus vel leo.
        </p>
      </div>
      {/* Actions */}
      <div className="mt-2 flex items-center justify-between text-sm">
        <div className="flex gap-8">
          <div className="flex items-center gap-2 rounded-xl bg-slate-200 p-2">
            <Image
              src={"/like.png"}
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Likes</span>
            </span>
          </div>
          <div className="flex items-center gap-2 rounded-xl bg-slate-200 p-2">
            <Image
              src={"/comment.png"}
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Comments</span>
            </span>
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 rounded-xl bg-slate-200 p-2">
            <Image
              src={"/share.png"}
              alt=""
              width={16}
              height={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>
            <span className="text-gray-500">
              123 <span className="hidden md:inline">Shares</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
