import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useMenuContext } from "../../utils/MenuContext";
import { Ray } from "../ui/Ray";

const rays = [
  {
    className: "rotate-[42deg]",
    children: (
      <Link passHref href={"/hobby-projects"}>
        <div>hobby projects</div>
      </Link>
    ),
  },
  {
    className: "rotate-[30deg]",
    children: (
      <Link passHref href={"/work-projects"}>
        <div>work projects</div>
      </Link>
    ),
  },
  {
    className: "rotate-[66deg]",
    children: (
      <Link passHref href={"/contact"}>
        <div>contact me</div>
      </Link>
    ),
  },
  {
    className: "rotate-[18deg]",
    children: (
      <Link passHref href={"/"}>
        <div>home</div>
      </Link>
    ),
  },
  // { className: "rotate-[90deg]", children: "" },
  // {classNameclassName: 'rotate-[0deg]', children: 'example' }, // You can include this if needed
  {
    className: "rotate-[54deg]",
    children: (
      <Link passHref href={"/jan_czerwinski_cv.pdf"}>
        <div>cv</div>
      </Link>
    ),
  },
];

export const Menu = () => {
  const { color } = useMenuContext();
  const [delayState, setDelayState] = useState("");
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDelayState(color);
    }, 200);
  }, [color]);

  const [animationIdx, setAnimationIdx] = useState(0);
  return (
    <div
      className={clsx(
        "z-50 w-14 h-14 rounded-br-full  cursor-pointer group   hover:w-40 hover:h-40 transform bg-blue   duration-[1200ms] bg-blend-difference  ease-in-out fixed top-0 left-0 overflow-hidden",
        "text-white bg-black/70",
        transition && "!h-[150vmax] !w-[150vmax]"
      )}
      onClick={() => {
        setTransition(!transition);
        setAnimationIdx(animationIdx === 1 ? 0 : 1);
      }}
    >
      <IoMenu
        size={32}
        className="m-0.5 group-hover:scale-[200%] group-hover:m-4 transition-all duration-700 ease-in-out"
      />

      <div className="grid h-0 w-0 ">
        {rays.map((props, idx) => (
          <Ray
            transition={transition}
            animationIdx={animationIdx}
            key={`ray_${idx}`}
            {...props}
          />
        ))}
      </div>
    </div>
  );
};
