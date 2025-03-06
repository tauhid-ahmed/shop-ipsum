import { LucideStar } from "lucide-react";

export default function StarRatings() {
  return (
    <div className="p-10 flex stroke-amber-500 fill-amber-500 stroke-1">
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
  );
}
