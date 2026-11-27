import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { isValidAvatarId, getAvatarById } from "@/lib/constants/avatars";

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({ error: "Missing userId parameter" }, { status: 400 });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: { profile: true },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({
      success: true,
      user: {
        id: user.id,
        displayName: user.displayName,
        email: user.email,
        avatarId: user.avatarId,
        avatar: getAvatarById(user.avatarId),
      },
      profile: user.profile,
    });
  } catch (error: any) {
    console.error("Profile fetch error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const { userId, targetAccent, difficulty, modelSpeed, avatarId } = await req.json();

    if (!userId) {
      // In demo/guest mode, return 200 so UI saves gracefully
      return NextResponse.json({
        success: true,
        message: "Guest preferences saved locally",
        avatarId: avatarId || "avatar-01",
        avatar: getAvatarById(avatarId),
      });
    }

    // Validate predefined avatar selection
    if (avatarId !== undefined && !isValidAvatarId(avatarId)) {
      return NextResponse.json(
        { error: "Invalid avatar ID. Only predefined avatars are permitted." },
        { status: 400 }
      );
    }

    // Update avatarId in MySQL users table if provided
    let updatedUser = null;
    if (avatarId) {
      updatedUser = await prisma.user.update({
        where: { id: userId },
        data: { avatarId },
        select: { id: true, displayName: true, email: true, avatarId: true },
      });
    }

    const updatedProfile = await prisma.profile.update({
      where: { userId },
      data: {
        ...(targetAccent && { targetAccent }),
        ...(difficulty && { difficulty }),
        ...(modelSpeed && { modelSpeed }),
      },
    });

    return NextResponse.json({
      success: true,
      profile: updatedProfile,
      ...(updatedUser && {
        user: {
          ...updatedUser,
          avatar: getAvatarById(updatedUser.avatarId),
        },
      }),
    });
  } catch (error: any) {
    console.error("Profile update error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
