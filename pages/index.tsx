import type { NextPage } from "next";
import { EntrySection } from "../components/EntrySection";
import { Layout } from "../components/Layout";
import { NavigationSection } from "../components/NavigationSection";
import { sections } from "../components/home/Sections";

const Home: NextPage = () => {
  type SectionKey = keyof typeof sections;
  const whiteList: SectionKey[] = [
    "cadaway",
    "rubiks",
    "hackathonBot",
    "wordClock",
    // "maze",
  ];
  return (
    <Layout>
      <EntrySection color={"#FFF"} />
      <NavigationSection color={"#000"} />
      {/* <SectionList allowList={whiteList} /> */}
      {/* <ProjectSection backgroundColor="#FFF" title="">
        <div className="flex justify-center  items-center w-screen bg-gree grid-cols-3 text-center text-4xl ">
          <div>Thank you for visiting my page!</div>
        </div>
      </ProjectSection> */}
    </Layout>
  );
};

export default Home;
