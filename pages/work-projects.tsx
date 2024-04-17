import { Layout } from "../components/Layout";
import { SectionList } from "../components/SectionList";
import ProjectSection from "../components/home/ProjectSection";
import { TechIcon } from "../components/ui/TechIcon";

const WorkProjects = () => {
  return (
    <Layout>
      <ProjectSection backgroundColor="#FFF" title="">
        <div className="flex flex-col gap-12 pt-60   justify-center  items-center w-full   text-center text-3xl ">
          <div className="px-40 mb-2">
            Those are the things I&apos;ve been working on. They taught me a
            broad skillset in mobile and fullstack development.
            <span className="pt-2 block">
              I used those technologies profesionally:
            </span>
          </div>

          <div className="grid grid-rows-3 grid-cols-9  gap-y-16 px-2 gap-6">
            <TechIcon name="go" />
            <TechIcon name="typescript" />
            <TechIcon name="nextjs" />
            <TechIcon name="strapi" />
            <TechIcon name="react" />
            <TechIcon name="react_native" />
            <TechIcon name="redux" />
            <TechIcon name="threejs" />
            <TechIcon name="tailwind" />

            <TechIcon name="firebase" />
            <TechIcon name="gcp" />
            <TechIcon name="azure" />
            <TechIcon name="aws" />
            <TechIcon name="digital_ocean" />
            <TechIcon name="vercel" />

            <TechIcon name="python" />
            <TechIcon name="fastapi" />
            <TechIcon name="opencv" />

            {/* <TechIcon name="ruby" /> */}
          </div>
        </div>
      </ProjectSection>
      <SectionList
        allowList={[
          "cadaway",
          "highlights",
          "livereach",
          "uxPin",
          "healthNation",
        ]}
      />
    </Layout>
  );
};

export default WorkProjects;
