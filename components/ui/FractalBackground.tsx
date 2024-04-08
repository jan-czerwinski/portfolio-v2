import { ReactNode } from "react";

type FractalBackgroundProps = { children: ReactNode };

export const FractalBackground = ({ children }: FractalBackgroundProps) => {
  return (
    <div className="relative">
      <iframe
        className="relative top-0 left-0"
        width="1920"
        height="1080"
        src="https://www.youtube.com/embed/IV1eUcP1U20?si=Z7ebJ2trzFvgfuBQ&amp;controls=0?autoplay=1"
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // referrerpolicy="strict-origin-when-cross-origin"
        // allowfullscreen
      />
    </div>
  );
};
