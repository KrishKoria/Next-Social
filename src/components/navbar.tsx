"use client";
import Image from "next/image";
import Link from "next/link";
import { MobileMenu } from "./mobilemenu";
import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

export default function Navbar() {
  return (
    <div className="flex h-24 items-center justify-between">
      {/* left */}
      <div className="md:hidden lg:block">
        <Link href="/" className="text-xl font-bold text-blue-600">
          NextSocial
        </Link>
      </div>
      {/* Center */}
      <div className="hidden w-[50%] items-center justify-between text-sm md:flex">
        <div className="flex gap-6 text-gray-600">
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
        <div className="hidden items-center rounded-xl bg-slate-100 p-2 xl:flex">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-sm outline-none"
          />
          <Image src={"/search.png"} alt="" width={16} height={16} />
        </div>
      </div>
      {/* Right */}
      <div className="flex w-[30%] items-center justify-end gap-4 xl:gap-8">
        <ClerkLoading>
          <div
            className="text-surface inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <div className="cursor-pointer">
              <Image src={"/people.png"} alt="" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src={"/messages.png"} alt="" width={20} height={20} />
            </div>
            <div className="cursor-pointer">
              <Image src={"/notifications.png"} alt="" width={20} height={20} />
            </div>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <div className="flex items-center gap-2 text-sm">
              <Image src={"/login.png"} alt="" width={20} height={20} />
              <Link href={"/sign-in"}>Login/Register</Link>
            </div>
          </SignedOut>
        </ClerkLoaded>
        <MobileMenu />
      </div>
    </div>
  );
}
