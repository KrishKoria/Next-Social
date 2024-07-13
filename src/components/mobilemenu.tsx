"use client";
import { Squash as Hamburger } from "hamburger-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export function MobileMenu() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <button type="submit">
            <Hamburger size={24} color="#000" toggled={toggle} />
          </button>
        </SheetTrigger>
        <SheetContent className="bg-white">
          <SheetTitle>Menu</SheetTitle>
          <div className="absolute left-0 z-10 flex h-[calc(100vh-144px)] w-full flex-col items-center justify-center gap-8 bg-white text-xl font-medium">
            <Link href={"/"} className="flex items-center gap-2">
              <Image
                src={"/home.png"}
                alt="Home"
                width={16}
                height={16}
                className="h-4 w-4"
              />
              <span>Home</span>
            </Link>
            <Link href={"/friends"} className="flex items-center gap-2">
              <Image
                src={"/friends.png"}
                alt="Home"
                width={16}
                height={16}
                className="h-4 w-4"
              />
              <span>Friends</span>
            </Link>
            <Link href={"/groups"} className="flex items-center gap-2">
              <Image
                src={"/groups.png"}
                alt="Home"
                width={16}
                height={16}
                className="h-4 w-4"
              />
              <span>Groups</span>
            </Link>
            <Link href={"/stories"} className="flex items-center gap-2">
              <Image
                src={"/stories.png"}
                alt="Home"
                width={16}
                height={16}
                className="h-4 w-4"
              />
              <span>Stories</span>
            </Link>
          </div>
          <SheetFooter>
            <SheetClose asChild>
              <button
                type="submit"
                onClick={() => setToggle((prev) => !prev)}
              ></button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
