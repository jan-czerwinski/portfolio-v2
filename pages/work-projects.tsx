import { Layout } from "../components/Layout";
import { Sections } from "../components/Sections";
import ProjectSection from "../components/home/ProjectSection";
import { TechIcon } from "../components/ui/TechIcon";

const WorkProjects = () => {
  return (
    <Layout>
      <ProjectSection backgroundColor="#FFF" title="">
        <div className="flex flex-col gap-12 justify-center  items-center w-screen bg-gree grid-cols-3 text-center text-3xl ">
          <div className="h-20"></div>
          <div className="w-[1000px] ">
            Those are the things I&apos;ve been working on. They taught me a
            broad skillset in mobile and fullstack development. i used those
            technologies profesionally:
          </div>
          <div className="flex gap-4">
            <TechIcon name="firebase" />
            <TechIcon name="react" />
            <TechIcon name="gcp" />
            <TechIcon name="python" />
            <TechIcon name="nextjs" />
            <TechIcon name="opencv" />
          </div>
        </div>
      </ProjectSection>
      <Sections
        allowList={["cadaway", "highlights", "livereach", "healthNation"]}
      />
    </Layout>
  );
};

export default WorkProjects;
