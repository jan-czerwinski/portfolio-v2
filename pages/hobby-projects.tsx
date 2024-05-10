import { Layout } from "../components/Layout";
import { SectionList } from "../components/SectionList";
import ProjectSection from "../components/home/ProjectSection";

const HobbyProjects = () => {
  return (
    <Layout>
      <ProjectSection backgroundColor="#FFF" title="">
        <div className="flex flex-col gap-12 mt-40    justify-center  items-center w-full   text-center text-2xl ">
          <div className="px-40  max-w-6xl">
            This is a collection of projects I did in my free time. They taught
            me a lot, and I had a lot of fun doing them.
            <br />
            You can click on the github icons to see the code.
          </div>
        </div>
      </ProjectSection>
      <SectionList
        allowList={[
          "rubiks",
          "hackathonBot",
          "mandelbrot",
          // "maze",
          "wordClock",
          "website",
        ]}
      />
    </Layout>
  );
};

export default HobbyProjects;
