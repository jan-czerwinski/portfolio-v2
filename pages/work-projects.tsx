import { Layout } from "../components/Layout";
import { Sections } from "../components/Sections";

const WorkProjects = () => {
  return (
    <Layout>
      <Sections allowList={["cadaway", "livereach", "healthNation"]} />
    </Layout>
  );
};

export default WorkProjects;
