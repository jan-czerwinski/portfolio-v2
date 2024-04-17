import { Layout } from "../components/Layout";
import { SectionList } from "../components/SectionList";

const HobbyProjects = () => {
  return (
    <Layout>
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
