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

export async function GET(request: NextRequest) {
  try {
    // getting data from url
    const take: number = parseInt(
      request.nextUrl.searchParams.get("take") ?? "0",
    );
    const id: string = request.nextUrl.searchParams.get("title") ?? "";

    // object for storing arguments from url
    let searchingArgs = {};

    if (take !== 0) {
      searchingArgs.take = take;
    } else if (id !== "") {
      searchingArgs.id = title;
    }

    const posts = await prisma.post.findMany({
      include: { comments: true },
      orderBy: { createdAt: "desc" },
      ...searchingArgs,
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
