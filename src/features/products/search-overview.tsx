"use client";

import { Input } from "@/components/ui/input";

export function SearchOverview() {
  return (
    <div className="flex">
      <Input placeholder="Search..." />
      {/* <Button size="icon" shape="pill" variant="ghost">
        <LucideSearch />
      </Button> */}
    </div>
  );
}
