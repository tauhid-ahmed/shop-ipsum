import { useAuth } from "@/hooks/useAuth";
import { cn } from "@/lib/utils";
import { LucideUser } from "lucide-react";
import Image from "next/image";

type ProfileImageProps = {
  size?: "default" | "md" | "lg";
  className?: string;
  align?: "center";
  border?: boolean;
};

export default function ProfileImage({
  size = "default",
  align,
  border,
}: ProfileImageProps) {
  const { user } = useAuth();

  return (
    <div
      className={cn(
        `rounded-full overflow-hidden p-1.5 flex items-center justify-center`,
        {
          "size-8": size === "default",
          "size-12": size === "md",
          "size-14": size === "lg",
          "mx-auto": align === "center",
        },
        border && "border border-border"
      )}
    >
      {user.image ? (
        <Image
          src={user.image}
          width={32}
          height={32}
          alt={user?.name || "Guest User"}
          priority={true}
          className="object-cover size-full rounded-full shadow-xs"
        />
      ) : (
        <LucideUser
          className={cn("text-muted-foreground", {
            "size-5": size === "default",
            "size-7": size === "md",
            "size-10": size === "lg",
            "mx-auto": align === "center",
          })}
        />
      )}
    </div>
  );
}
