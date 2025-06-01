import { cn } from "@/lib/utils";
import Image from "next/image";

type ProfileImageProps = {
  name: string;
  image: string;
} & React.ComponentProps<"div">;

export default function ProfileImage({ name, image }: ProfileImageProps) {
  return (
    <div
      className={cn(
        `rounded-full overflow-hidden p-1.5 flex items-center justify-center relative size-8 lg:size-12 border border-primary/50 mx-auto`
      )}
    >
      {image ? (
        <Image
          src={image}
          width={32}
          height={32}
          alt={name}
          priority={true}
          className="object-cover size-full rounded-full absolute inset-px"
        />
      ) : (
        <span
          className={cn(
            "bg-primary/30 text-primary absolute inset-0 uppercase bold text-2xl flex items-center justify-center"
          )}
        >
          {name[0]}
        </span>
      )}
    </div>
  );
}
