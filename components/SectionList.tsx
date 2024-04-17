import COLOR_PALLETES from "nice-color-palettes";
import { useEffect, useState } from "react";
import { sections } from "./home/Sections";

type SectionKey = keyof typeof sections;

type SectionListProps = {
  allowList: SectionKey[];
};

export const SectionList = ({ allowList }: SectionListProps) => {
  const [sectionColors, setSectionColors] = useState<string[]>();

  useEffect(() => {
    let aLotOfColors: string[] = []; //array of a lot of colors so we dont run out - ugly, but works
    const randomColorPallete =
      COLOR_PALLETES[Math.floor(Math.random() * COLOR_PALLETES.length)];
    // console.log(COLOR_PALLETES);
    for (let i = 0; i < 100; i++) {
      aLotOfColors = [...aLotOfColors, ...randomColorPallete];
    }
    // console.log(aLotOfColors);
    // setSectionColors(aLotOfColors);
    setSectionColors(["#FFF", "#000"]);
  }, []);
  if (!sectionColors)
    return (
      <div className="grid w-full h-[100vh] bg-rose-400 text-white text-4xl text-center place-content-center">
        loading
      </div>
    );

  return (
    <>
      {allowList.map((key, idx) => {
        const section = sections[key];
        return section(sectionColors[(idx + 1) % sectionColors.length]);
      })}
    </>
  );
};
