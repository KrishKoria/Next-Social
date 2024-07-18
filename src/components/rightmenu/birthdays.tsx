import Image from "next/image";
import Link from "next/link";

export default function Birthdays() {
  return (
    <div className="flex flex-col gap-4 rounded-lg bg-white p-4 text-sm shadow-md">
      <div className="flex items-center justify-between font-medium">
        <span className="text-gray-500">Birthdays</span>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Image
            src="https://images.pexels.com/photos/26109271/pexels-photo-26109271/free-photo-of-woman-in-white-dress-leaning-on-stairs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
            width={40}
            height={40}
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="font-semibold">Ava Addams</span>
        </div>
        <div className="flex justify-end gap-3">
          <button className="rounded-md bg-blue-500 px-2 py-1 text-xs text-white">
            Celebrate
          </button>
        </div>
      </div>
      <div className="flex items-center gap-4 rounded-lg bg-slate-100 p-4">
        <Image src="/gift.png" alt="" width={24} height={24} />
        <Link href="/" className="flex flex-col gap-1 text-xs">
          <span className="font-semibold text-gray-700">
            Upcoming Birthdays
          </span>
          <span className="text-gray-500">See Others</span>
        </Link>
      </div>
    </div>
  );
}
