import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";

const imagePath = "/favicon.ico";

type ProfileImageProps = {
  size?: "default" | "md" | "lg";
  className?: string;
  align?: "center";
};

export default function ProfileImage({
  size = "default",
  align,
}: ProfileImageProps) {
  const { data: session } = useSession();

  return (
    <div
      className={cn(`rounded-full overflow-hidden`, {
        "size-8": size === "default",
        "size-12": size === "md",
        "size-14": size === "lg",
        "mx-auto": align === "center",
      })}
    >
      <Image
        src={session?.user?.image || imagePath}
        width={40}
        height={40}
        alt={session?.user?.name || "Guest User"}
        className="object-cover size-full"
      />
    </div>
  );
}
