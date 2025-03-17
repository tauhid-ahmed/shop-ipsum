import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { LucideUser } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const imagePath = "/assets/profile/user.svg";

type ProfileImageProps = {
  size?: "default" | "md" | "lg";
  className?: string;
  align?: "center";
};

export default function ProfileImage({
  size = "default",
  align,
}: ProfileImageProps) {
  const { user } = useAuth();

  return (
    <div
      className={cn(`rounded-full overflow-hidden p-1.5`, {
        "size-9": size === "default",
        "size-12": size === "md",
        "size-14": size === "lg",
        "mx-auto": align === "center",
      })}
    >
      {user.image ? (
        <Image
          src={user?.image || imagePath}
          width={40}
          height={40}
          alt={user?.name || "Guest User"}
          className="object-cover size-full rounded-full"
        />
      ) : (
        <LucideUser />
      )}
    </div>
  );
}
