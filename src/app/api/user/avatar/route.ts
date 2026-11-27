import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import {
  PREDEFINED_AVATARS,
  DEFAULT_AVATAR_ID,
  getAvatarById,
  isValidAvatarId,
} from "@/lib/constants/avatars";

// GET /api/user/avatar?userId=...
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const userId = searchParams.get("userId");

    if (!userId) {
      return NextResponse.json({
        success: true,
        defaultAvatarId: DEFAULT_AVATAR_ID,
        defaultAvatar: getAvatarById(DEFAULT_AVATAR_ID),
        avatars: PREDEFINED_AVATARS,
      });
    }

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, displayName: true, avatarId: true },
    });

    const activeAvatarId = user?.avatarId || DEFAULT_AVATAR_ID;

    return NextResponse.json({
      success: true,
      avatarId: activeAvatarId,
      avatar: getAvatarById(activeAvatarId),
      avatars: PREDEFINED_AVATARS,
    });
  } catch (error: any) {
    console.error("Avatar GET error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// PUT /api/user/avatar
// Body: { userId: string, avatarId: string }
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { userId, avatarId } = body;

    // Strict validation: Reject non-predefined avatars
    if (!avatarId || typeof avatarId !== "string" || !isValidAvatarId(avatarId)) {
      return NextResponse.json(
        {
          error:
            "Invalid avatar selection. Only predefined avatars may be selected. Custom uploads are not permitted.",
        },
        { status: 400 }
      );
    }

    // Guest / demo mode fallback
    if (!userId) {
      return NextResponse.json({
        success: true,
        message: "Avatar saved locally for session",
        avatarId,
        avatar: getAvatarById(avatarId),
      });
    }

    // Persist only avatar_id in the MySQL users table
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { avatarId },
      select: {
        id: true,
        displayName: true,
        email: true,
        avatarId: true,
      },
    });

    return NextResponse.json({
      success: true,
      avatarId: updatedUser.avatarId,
      avatar: getAvatarById(updatedUser.avatarId),
    });
  } catch (error: any) {
    console.error("Avatar PUT error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
