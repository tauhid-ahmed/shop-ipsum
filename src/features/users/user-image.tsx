import { cn } from "@/lib/utils";
import Image from "next/image";

type ProfileImageProps = {
  name: string;
  image?: string | null;
  size: "md" | "lg";
} & React.ComponentProps<"div">;

const classnames = {
  md: "size-6 text-sm",
  lg: "size-8 lg:size-12 text-xl lg:text-2xl",
} as const;

export function UserImage({ name, image, size }: ProfileImageProps) {
  return (
    <div
      className={cn(
        classnames[size],
        `rounded-full overflow-hidden p-1.5 flex items-center justify-center relative border border-primary/50 mx-auto`
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
            "bg-primary/30 text-primary absolute inset-0 uppercase bold flex items-center justify-center"
          )}
        >
          {name[0]}
        </span>
      )}
    </div>
  );
}
