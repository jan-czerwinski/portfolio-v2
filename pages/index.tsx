import type { NextPage } from "next";
import { isMobile } from "react-device-detect";
import { EntrySection } from "../components/EntrySection";
import { Layout } from "../components/Layout";
import { Sections } from "../components/Sections";
import ProjectSection from "../components/home/ProjectSection";
import { sections } from "../components/home/Sections";

const Home: NextPage = () => {
  if (isMobile)
    return (
      <div className="grid w-full h-[100vh] bg-rose-400 text-white text-4xl text-center place-content-center">
        please view this page on desktop, it&apos;s not made for mobile devices
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
  return (
    <Layout>
      <EntrySection color={"#FFF"} />
      <Sections allowList={whiteList} />
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
    </Layout>
  );
};

export default Home;
