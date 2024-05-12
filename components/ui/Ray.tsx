import clsx from "clsx";
import { ReactNode, useState } from "react";

type RayProps = {
  animationIdx: number;
  className: string;
  children: ReactNode;
  transition?: boolean;
  link?: string;
};
export const Ray = ({
  animationIdx,
  transition,
  className,
  children,
  link,
}: RayProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      id="rays"
      className={clsx(
        " z-50 col-start-1 row-start-1 w-2   border-white transform  transition-all duration-1000 border-b h-0 absolute top-20 left-20 origin-left ",
        hovered && "border-2 duration-75",
        animationIdx === 1 ? "w-[150vmax]" : "invisible",
        className
      )}
    >
      <div
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        className={clsx(
          "  pl-96 transform transition-all  duration-500   -translate-y-10  text-3xl   ",
          hovered && "-translate-x-10",
          !transition && "opacity-0"
        )}
      >
        {children}
      </div>
    </div>
  );
};
