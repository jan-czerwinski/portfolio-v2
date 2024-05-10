import Link from "next/link";
import { useEffect, useState } from "react";
import { getBgAndTextColorStyle } from "../utils/colorUtils";
import { Ray } from "./ui/Ray";
type NavigationSectionProps = { color: string };

const startRays = [
  {
    idx: 0,
    className: "rotate-[45deg]",
    children: <></>,
  },
  {
    idx: 1,
    className: "rotate-[135deg]",
    children: <></>,
  },
  {
    idx: 2,
    className: "rotate-[225deg]",
    children: <></>,
  },
  {
    idx: 3,
    className: "rotate-[315deg]",
    children: <></>,
  },
];

const downHighlightRays = [
  {
    idx: 0,
    className: "rotate-[55deg]",
    children: <></>,
  },
  {
    idx: 1,
    className: "rotate-[125deg]",
    children: <></>,
  },
  {
    idx: 2,
    className: "rotate-[225deg]",
    children: <></>,
  },
  {
    idx: 3,
    className: "rotate-[315deg]",
    children: <></>,
  },
];

const upHighlightRays = [
  {
    idx: 0,
    className: "rotate-[45deg]",
    children: <></>,
  },
  {
    idx: 1,
    className: "rotate-[135deg]",
    children: <></>,
  },
  {
    idx: 2,
    className: "rotate-[235deg]",
    children: <></>,
  },
  {
    idx: 3,
    className: "rotate-[305deg]",
    children: <></>,
  },
];
const leftHighlightRays = [
  {
    idx: 0,
    className: "rotate-[45deg]",
    children: <></>,
  },
  {
    idx: 1,
    className: "rotate-[145deg]",
    children: <></>,
  },
  {
    idx: 2,
    className: "rotate-[215deg]",
    children: <></>,
  },
  {
    idx: 3,
    className: "rotate-[315deg]",
    children: <></>,
  },
];

const rightHighlightRays = [
  {
    idx: 0,
    className: "rotate-[35deg]",
    children: <></>,
  },
  {
    idx: 1,
    className: "rotate-[135deg]",
    children: <></>,
  },
  {
    idx: 2,
    className: "rotate-[225deg]",
    children: <></>,
  },
  {
    idx: 3,
    className: "rotate-[325deg]",
    children: <></>,
  },
];

export const NavigationSection = ({ color }: NavigationSectionProps) => {
  const [animationIdx, setAnimationIdx] = useState(0);
  const [rays, setRays] = useState(startRays);

  useEffect(() => {
    setAnimationIdx(1);
  }, []);

  return (
    <div
      className={`grid place-content-center bg-red-400   w-screen h-screen  snap-start sectionColors overflow-clip`}
      id="entry_id"
      style={getBgAndTextColorStyle(color)}
    >
      {/* <div className=" w-full h-full bg-red-200 overflow-hidden p-10 grow "> */}
      <div className="col-start-1 row-start-1 grid h-0 w-0 relative -top-20 -left-20  ">
        {rays.map((props, idx) => (
          <Ray animationIdx={animationIdx} key={`ray_${idx}`} {...props} />
        ))}
      </div>
      <div className="col-start-1 row-start-1 bg-red-300 w-0 h-0 ">
        <h1 className="text-white text-2xl -translate-x-1/2 -translate-y-1/2">
          <div className="-translate-x-60">
            <Link passHref href={"/jan_czerwinski_cv.pdf"}>
              <div
                className="whitespace-nowrap cursor-pointer w-fit translate-y-7  -translate-x-1/2"
                onMouseOver={() => setRays(leftHighlightRays)}
                onMouseOut={() => setRays(startRays)}
              >
                download my cv
              </div>
            </Link>
          </div>
          <div className="translate-x-60">
            <Link passHref href={"/contact"}>
              <div
                className="whitespace-nowrap cursor-pointer w-fit  -translate-x-1/2"
                onMouseOver={() => setRays(rightHighlightRays)}
                onMouseOut={() => setRays(startRays)}
              >
                contact me
              </div>
            </Link>
          </div>
          <div className="-translate-y-60">
            <Link passHref href={"/work-projects"}>
              <div
                className="whitespace-nowrap cursor-pointer w-fit  -translate-x-1/2"
                onMouseOver={() => setRays(upHighlightRays)}
                onMouseOut={() => setRays(startRays)}
              >
                work projects
              </div>
            </Link>
          </div>
          <div className="translate-y-60">
            <Link passHref href={"/hobby-projects"}>
              <div
                className="whitespace-nowrap cursor-pointer w-fit  -translate-x-1/2"
                onMouseOver={() => setRays(downHighlightRays)}
                onMouseOut={() => setRays(startRays)}
              >
                hobby projects
              </div>
            </Link>
          </div>
        </h1>
      </div>
      {/* </div> */}
    </div>
  );
};
