import type { NextPage } from "next";
import COLOR_PALLETES from "nice-color-palettes";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { EntrySection } from "../components/EntrySection";
import { Menu } from "../components/home/Menu";
import ProjectSection from "../components/home/ProjectSection";
import { sections } from "../components/home/Sections";
import { getBgAndTextColorStyle } from "../utils/colorUtils";

const Home: NextPage = () => {
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

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
    // console.log({ mousePosition });
  };

  if (isMobile)
    return (
      <div className="grid w-full h-[100vh] bg-rose-400 text-white text-4xl text-center place-content-center">
        please view this page on desktop, it&apos;s not made for mobile devices
      </div>
    );
  if (!sectionColors)
    return (
      <div className="grid w-full h-[100vh] bg-rose-400 text-white text-4xl text-center place-content-center">
        loading
      </div>
    );

  type SectionKey = keyof typeof sections;

  const whiteList: SectionKey[] = [
    "cadaway",
    "rubiks",
    "hackathonBot",
    "wordClock",
    "maze",
  ];
  const sectionElements = () =>
    whiteList.map((key, idx) => {
      const section = sections[key];
      return section(sectionColors[(idx + 1) % sectionColors.length]);
    });

  return (
    <div
      className={`h-screen overflow-y-scroll text-black snap snap-y snap-mandatory`}
      style={getBgAndTextColorStyle(sectionColors[0])}
      onMouseMove={handleMouseMove}
    >
      <Menu />
      <EntrySection sectionColors={sectionColors} />
      {sectionElements()}
      <ProjectSection
        backgroundColor="bg-pink-300"
        title="Thank you for visiting my page!"
      >
        <div className="grid items-center justify-center w-full grid-cols-3 text-center">
          <div>frog1</div>
          <div>Thank you for visiting my page!</div>

          <div>frog2</div>
        </div>
      </ProjectSection>
    </div>
  );
};

export default Home;
