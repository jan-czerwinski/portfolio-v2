import clsx from "clsx";
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useMenuContext } from "../../utils/MenuContext";
import { Ray } from "../ui/Ray";

const rays = [
  { className: "rotate-[15deg]", name: "menu to be done" },
  { className: "rotate-[30deg]", name: "work in progress" },
  { className: "rotate-[45deg]", name: "wip" },
  { className: "rotate-[60deg]", name: "" },
  { className: "rotate-[90deg]", name: "" },
  // {classNameclassName: 'rotate-[0deg]', name: 'example' }, // You can include this if needed
  { className: "rotate-[75deg]", name: "" },
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
        "z-50 w-10 h-10 rounded-br-full  cursor-pointer group   hover:w-40 hover:h-40 transform bg-blue   duration-[1200ms] bg-blend-difference  ease-in-out fixed top-0 left-0 overflow-hidden",
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
        size={24}
        className="m-0.5 group-hover:scale-[200%] group-hover:m-4 transition-all duration-700 ease-in-out"
      />
      {/* <div className="group-hover:visible invisible ml-4 mt-4 text-2xl">
        menu
      </div> */}
      <div className="grid h-0 w-0">
        {rays.map((props) => (
          <Ray animationIdx={animationIdx} key={props.name} {...props} />
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
