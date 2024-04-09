import clsx from "clsx";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useMenuContext } from "../../utils/MenuContext";
import { Ray } from "../ui/Ray";

const rays = [
  {
    className: "rotate-[15deg]",
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
    className: "rotate-[45deg]",
    children: (
      <Link passHref href={"/contact.pdf"}>
        <div>📞 contact me</div>
      </Link>
    ),
  },
  { className: "rotate-[75deg]", children: "" },
  { className: "rotate-[90deg]", children: "" },
  // {classNameclassName: 'rotate-[0deg]', children: 'example' }, // You can include this if needed
  {
    className: "rotate-[60deg]",
    children: (
      <Link passHref href={"/jan_czerwinski_cv.pdf"}>
        <div>📜 cv</div>
      </Link>
    ),
  },
];

export const Menu = () => {
  const { myStringState } = useMenuContext();
  const [delayState, setDelayState] = useState("");
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDelayState(myStringState);
    }, 200);
  }, [myStringState]);

  const [animationIdx, setAnimationIdx] = useState(0);
  return (
    <div
      className={clsx(
        "z-50 w-14 h-14 rounded-br-full  cursor-pointer group   hover:w-40 hover:h-40 transform bg-blue   duration-[1200ms] bg-blend-difference  ease-in-out fixed top-0 left-0 overflow-hidden",
        delayState === "#FFF"
          ? "text-white bg-black/70"
          : "text-black bg-white/70",
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
      {/* <div className="group-hover:visible invisible ml-4 mt-4 text-2xl">
        menu
      </div> */}
      <div className="grid h-0 w-0">
        {rays.map((props, idx) => (
          <Ray animationIdx={animationIdx} key={`ray_${idx}`} {...props} />
        ))}
      </div>
      {/* <div className="group-hover:visible invisible grid place-content-center w-screen h-screen">
      <div className="flex flex-col gap-20">
      <CustomText
            className="!text-white ml-60"
            withAnimation
            animationIdx={1}
            currentIdx={animationIdx}
          >
            my work projects
          </CustomText>
          <CustomText
            className="!text-white -ml-40 "
            currentIdx={animationIdx}
            withAnimation
            animationIdx={1}
          >
            my hobby projects
          </CustomText>
      </div>
      </div> */}
    </div>
  );
};
