"use client";
import { LucideSearch } from "lucide-react";
import { Button } from "@/components/ui/button";
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
