import { useEffect, useRef, useState } from "react";

export function usePointerEvent() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  // handle move
  const handleMove = (
    client: { clientX: number; clientY: number },
    rect: DOMRect
  ) => {
    const { width, height, left, top } = rect;
    const w = client.clientX - left;
    const h = client.clientY - top;
    containerRef.current?.style.setProperty(
      "--xOrigin",
      `${(w / width) * 100}%`
    );
    containerRef.current?.style.setProperty(
      "--yOrigin",
      `${(h / height) * 100}%`
    );
  };

  useEffect(
    () =>
      setIsTouchDevice(
        "ontouchstart" in window || navigator.maxTouchPoints > 0
      ),
    []
  );

  useEffect(() => {
    const handleTouchEvent = (e: TouchEvent) => {
      if (isTouchDevice && containerRef.current?.contains(e.target as Node)) {
        e.preventDefault();
      }
    };

    window.addEventListener("touchmove", handleTouchEvent, { passive: false });
    return () => window.removeEventListener("touchmove", handleTouchEnd);
  }, [isTouchDevice]);

  const handleLeave = () => {
    containerRef.current?.style.setProperty("--xOrigin", `50%`);
    containerRef.current?.style.setProperty("--yOrigin", `50%`);
  };

  // handle pointer move
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // if (isTouchDevice && e.pointerType === "touch") return;
    handleMove(
      { clientX: e.clientX, clientY: e.clientY },
      e.currentTarget.getBoundingClientRect()
    );
  };

  // === === === Touch events === === ===

  const handleTouchStart = () => {
    containerRef.current?.classList.add("is-touched");
    setIsTouchDevice(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const point = e.touches[0];
    handleMove(
      { clientX: point.clientX, clientY: point.clientY },
      e.currentTarget.getBoundingClientRect()
    );
  };

  const handleTouchEnd = () => {
    containerRef.current?.classList.remove("is-touched");
    setIsTouchDevice(false);
    handleLeave();
  };

  return {
    containerRef,
    handleLeave,
    handlePointerMove,
    handleTouchEnd,
    handleTouchStart,
    handleTouchMove,
  };
}
