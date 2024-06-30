import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma/prismaConnection";

export async function POST(request: NextRequest) {
  const { postId, username, message } = await request.json();

  try {
    await prisma.comment.create({
      data: {
        username: username,
        message: message,
        post: {
          connect: { id: postId },
        },
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error,
      status: 500,
    });
  }
}
