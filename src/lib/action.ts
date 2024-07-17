"use server";

import { auth } from "@clerk/nextjs/server";
import prisma from "./client";

export async function switchFollowUnfollow(userId: string) {
  const { userId: currentuserId } = auth();
  if (!currentuserId) {
    throw new Error("User not authenticated");
  }

  try {
    const existingFollow = await prisma.follow.findFirst({
      where: {
        followerId: currentuserId,
        followingId: userId,
      },
    });
    if (existingFollow) {
      await prisma.follow.delete({
        where: {
          id: existingFollow.id,
        },
      });
    } else {
      const existingFollowRequest = await prisma.followRequest.findFirst({
        where: {
          senderId: currentuserId,
          receiverId: userId,
        },
      });

      if (existingFollowRequest) {
        await prisma.followRequest.delete({
          where: {
            id: existingFollowRequest.id,
          },
        });
      } else {
        await prisma.followRequest.create({
          data: {
            senderId: currentuserId,
            receiverId: userId,
          },
        });
      }
    }
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong!");
  }
}
