import { LucideStar } from "lucide-react";

export default function StarRatings() {
  return (
    <div className="inline-flex align-middle gap-1 items-center">
      <div className="flex stroke-amber-500 fill-amber-500 stroke-1 [&_svg]:size-3.5">
        <LucideStar className="stroke-amber-500 fill-amber-500 stroke-1" />
        <LucideStar className="stroke-amber-500 fill-amber-500 stroke-1" />
        <LucideStar className="stroke-amber-500 fill-amber-500 stroke-1" />
        <LucideStar className="stroke-amber-500 fill-amber-500 stroke-1" />
        <div className="relative inline-block">
          <LucideStar className="stroke-amber-500 stroke-1" />
          <div className="absolute inset-0 w-(--w) [--w:45%] overflow-hidden">
            <LucideStar className="stroke-amber-500 fill-amber-500 stroke-0" />
          </div>
        </div>
      </div>
      <span className="text-xs">(32)</span>
    </div>
  );
}
