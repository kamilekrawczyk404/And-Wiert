import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/prisma/prismaConnection";

export async function POST(request: NextRequest) {
  // Storing a new post
  const { title } = await request.json();

  try {
    const post = await prisma.post.create({
      data: {
        title,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error,
      status: 500,
    });
  }
}

export async function GET() {
  try {
    const posts = await prisma.post.findMany({
      include: { comments: true },
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error,
      status: 500,
    });
  }
}
