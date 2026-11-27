"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { getAvatarById, DEFAULT_AVATAR_PATH } from "@/lib/constants/avatars";

interface UserAvatarProps {
  avatarId?: string | null;
  size?: number;
  alt?: string;
  className?: string;
  priority?: boolean;
  onClick?: () => void;
}

export function UserAvatar({
  avatarId,
  size = 40,
  alt,
  className = "",
  priority = false,
  onClick,
}: UserAvatarProps) {
  const avatar = getAvatarById(avatarId);
  const [imgSrc, setImgSrc] = useState(avatar.path);

  // Synchronize when avatarId prop changes
  useEffect(() => {
    setImgSrc(avatar.path);
  }, [avatar.path]);

  const hasResponsiveWidth = className.includes("w-full") || className.includes("w-auto");
  const hasResponsiveHeight = className.includes("h-full") || className.includes("h-auto");

  return (
    <div
      onClick={onClick}
      style={{
        ...(!hasResponsiveWidth && size ? { width: size } : {}),
        ...(!hasResponsiveHeight && size ? { height: size } : {}),
      }}
      className={`relative rounded-full overflow-hidden shrink-0 select-none ${
        onClick ? "cursor-pointer" : ""
      } ${className}`}
    >
      <Image
        src={imgSrc}
        alt={alt || `${avatar.name} (${avatar.role})`}
        width={256}
        height={256}
        priority={priority}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        onError={() => {
          // Robust fallback to default avatar asset if path cannot be loaded
          if (imgSrc !== DEFAULT_AVATAR_PATH) {
            setImgSrc(DEFAULT_AVATAR_PATH);
          }
        }}
      />
    </div>
  );
}
