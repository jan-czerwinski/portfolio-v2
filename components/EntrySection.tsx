import Image from "next/image";
import { useEffect, useState } from "react";
import { useMenuContext } from "../utils/MenuContext";
import { getBgAndTextColorStyle } from "../utils/colorUtils";
import { useInView } from "../utils/useInView";
import { CustomText } from "./ui/CustomText";

type EntrySectionProps = { sectionColors: string[] };
export const EntrySection = ({ sectionColors }: EntrySectionProps) => {
  const [animationIdx, setAnimationIdx] = useState(0);
  const { inView } = useInView("entry_id");
  const { setMyStringState } = useMenuContext();

  useEffect(() => {
    if (inView) {
      setMyStringState("#FFF");
    }
  }, [inView, setMyStringState]);

  return (
    <div
      className={`grid  w-full h-screen place-content-center snap-start sectionColors`}
      id="entry_id"
      style={getBgAndTextColorStyle(sectionColors[0])}
    >
      <div className="flex   ">
        <div className="w-[25vw] place-content-center mt-auto  ">
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
          <CustomText>hi!</CustomText>

          <CustomText> my name is:</CustomText>
          <CustomText
            withAnimation
            animationIdx={0}
            currentIdx={animationIdx}
            nextAnimation={() => setAnimationIdx((oldIdx) => oldIdx + 1)}
          >
            jan czerwinski
          </CustomText>
          <CustomText
            currentIdx={animationIdx}
            withAnimation
            animationIdx={1}
            nextAnimation={() => setAnimationIdx((oldIdx) => oldIdx + 1)}
          >
            a mobile&&web fullstack developer
          </CustomText>
          <CustomText
            currentIdx={animationIdx}
            animationIdx={2}
            withAnimation
            nextAnimation={() => setAnimationIdx((oldIdx) => oldIdx + 1)}
          >
            welcome to my website! enjoy
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
