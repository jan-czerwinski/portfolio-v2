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
        hovered && "border-2 duration-75",
        animationIdx === 1 ? "w-[150vmax]" : "invisible",
        className
      )}
    >
      <div
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        className={clsx(
          " ml-[20%] pl-16 transform transition-all  duration-500   -translate-y-10  text-3xl hover:font-semibold  ",
          hovered && "-translate-x-10"
        )}
      >
        {children}
      </div>
    </div>
  );
};
