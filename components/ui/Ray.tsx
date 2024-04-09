import clsx from "clsx";
import { ReactNode, useState } from "react";

type RayProps = {
  animationIdx: number;
  className: string;
  children: ReactNode;
  link?: string;
};
export const Ray = ({ animationIdx, className, children, link }: RayProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      id="rays"
      className={clsx(
        " z-50 col-start-1 row-start-1 w-2   border-white transform  transition-all duration-1000 border-b h-0 fixed top-20 left-20 origin-left ",
        hovered && "border-emerald-600 ",
        animationIdx === 1 ? "w-[150vmax]" : "invisible",
        className
      )}
    >
      <div
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        className={clsx(
          " ml-[30%] pl-10 transform  transition-all  duration-700   -translate-y-8 text-white text-3xl hover:text-emerald-600  ",
          hovered && "-translate-x-6"
        )}
      >
        {children}
      </div>
    </div>
  );
};
