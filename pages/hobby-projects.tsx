import { Layout } from "../components/Layout";
import { Sections } from "../components/Sections";

const HobbyProjects = () => {
  return (
    <Layout>
      <Sections
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
