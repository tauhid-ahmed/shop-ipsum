"use client";
import React, { useEffect } from "react";

export function useRootClick(
  callback: () => void,
  ref: React.RefObject<HTMLElement | null>
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      event.stopPropagation();
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [callback, ref]);
}
