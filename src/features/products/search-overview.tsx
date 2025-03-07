"use client";
import { LucideSearch } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SearchOverview() {
  return (
    <div>
      <Button size="icon" shape="pill" variant="ghost">
        <LucideSearch />
      </Button>
    </div>
  );
}
