"use client";
import EmblaProvider, { EmblaCarousel } from "./carousel";
import "./embla.modules.css";

export default function Embla() {
  return (
    <div className="">
      <EmblaProvider>
        <EmblaCarousel />
      </EmblaProvider>
    </div>
  );
}
