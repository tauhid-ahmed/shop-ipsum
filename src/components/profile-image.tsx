import { useSession } from "next-auth/react";
import Image from "next/image";

const imagePath = "/favicon.ico";

export default function ProfileImage() {
  const { data: session } = useSession();
  return (
    <div className="size-8 rounded-full overflow-hidden">
      <Image
        src={session?.user?.image || imagePath}
        width={40}
        height={40}
        alt={session?.user?.name || "Guest User"}
      />
    </div>
  );
}
