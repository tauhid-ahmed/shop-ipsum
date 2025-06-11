"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/container";

export function SearchLayout() {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <Container>
      <div
        className={cn("grid transition-[grid]", {
          "grid-cols-[0px_1fr]": isCollapsed,
          "grid-cols-[300px_1fr]": !isCollapsed,
        })}
      >
        <div className="w h-screen border">
          <div className="size-full bg-rose-700"></div>
        </div>
        <div className="s h-screen border">
          <Button
            onClick={() => {
              setIsCollapsed(!isCollapsed);
            }}
          >
            toggle
          </Button>
        </div>
      </div>
    </Container>
  );
}
