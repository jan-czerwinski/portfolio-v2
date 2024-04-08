import clsx from "clsx";
import { useState } from "react";

type RayProps = { animationIdx: number; className: string; name: string };
export const Ray = ({ animationIdx, className, name }: RayProps) => {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      id="rays"
      className={clsx(
        " z-50 col-start-1 row-start-1 w-2   border-white transform  transition-all duration-1000 border-b h-0 fixed top-20 left-20 origin-left ",
        hovered && "border-blue-400",
        animationIdx === 1 ? "w-[150vmax]" : "invisible",
        className
      )}
    >
      <div
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        className=" ml-[30%] pl-10 transform  transition-all  duration-800   -translate-y-8 text-white text-3xl "
      >
        {name}
      </div>
    </div>
  );
};
