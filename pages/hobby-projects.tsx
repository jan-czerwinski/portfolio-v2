import { Layout } from "../components/Layout";
import { Sections } from "../components/Sections";

const HobbyProjects = () => {
  return (
    <Layout>
      <Sections
        allowList={["rubiks", "hackathonBot", "maze", "website", "wordClock"]}
      />
    </Layout>
  );
};

export default HobbyProjects;
