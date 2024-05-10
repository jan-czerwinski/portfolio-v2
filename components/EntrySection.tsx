import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useMenuContext } from "../utils/MenuContext";
import { getBgAndTextColorStyle } from "../utils/colorUtils";
import { useInView } from "../utils/useInView";
import { CustomText } from "./ui/CustomText";

type EntrySectionProps = { color: string };
export const EntrySection = ({ color }: EntrySectionProps) => {
  const [animationIdx, setAnimationIdx] = useState(0);
  const nextAnimation = useCallback(
    () => setAnimationIdx((oldIdx) => oldIdx + 1),
    []
  );
  const { inView } = useInView("entry_id");
  const { setColor } = useMenuContext();

  useEffect(() => {
    if (inView) {
      setColor("#FFF");
    }
  }, [inView, setColor]);

  return (
    <div
      className={`grid  w-full h-screen place-content-center snap-start sectionColors`}
      id="entry_id"
      style={getBgAndTextColorStyle(color)}
    >
      <div className="flex  gap-10 ">
        <div className="w-[30vw] place-content-center mt-auto  ">
          <Image
            src={"/me_cropped.png"}
            alt="me face"
            width={517}
            layout="responsive"
            height={483}
          />
        </div>
        {/* <h1 className=" text-center text-2xl italic text-black font-bold">
            hi! my name is: Jan Czerwiński
          </h1> */}
        <div className="flex flex-col gap-2 mt-auto  border-b border-b-black  w-[60vw]">
          <CustomText
            withAnimation
            animationIdx={0}
            currentIdx={animationIdx}
            nextAnimation={nextAnimation}
          >
            hi!
          </CustomText>
          <CustomText
            withAnimation
            animationIdx={1}
            currentIdx={animationIdx}
            nextAnimation={nextAnimation}
          >
            my name is: jan czerwinski
          </CustomText>
          <CustomText
            currentIdx={animationIdx}
            withAnimation
            animationIdx={2}
            nextAnimation={nextAnimation}
          >
            a mobile && web fullstack developer
          </CustomText>
          <CustomText
            currentIdx={animationIdx}
            animationIdx={3}
            withAnimation
            nextAnimation={nextAnimation}
          >
            welcome to my website! enjoy
          </CustomText>
          <CustomText
            currentIdx={animationIdx}
            animationIdx={4}
            withAnimation
            nextAnimation={() => setAnimationIdx((oldIdx) => oldIdx + 1)}
            withBeepingAtEnd
          >
            its a work in progress, some things might not work
          </CustomText>
        </div>
        {/* <button
            onClick={() => {
              console.log(sectionElements());
            }}
            className="text 2xl"
          >
            🐞🪲🐛 debug 🐞🪲🐛
          </button> */}
      </div>
    </div>
  );
};
