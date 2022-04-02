import type { NextPage } from 'next';
import ProjectSection from '../components/ui/ProjectSection';
import LinkButton from '../components/ui/LinkButton';

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-y-scroll text-white bg-teal-300 snap snap-y snap-mandatory">
      <div className="grid w-full h-screen place-content-center snap-start ">
        <h1 className="text-xl italic font-bold">Jan Czerwiński</h1>
      </div>

      <ProjectSection backgroundColor="bg-green-300" title="maze">
        <LinkButton text="click here for maze" href="/maze" />
      </ProjectSection>

      <ProjectSection backgroundColor="bg-blue-300" title="game of life">
        <LinkButton text="game of life" href="/gameoflife" />
      </ProjectSection>

      <ProjectSection backgroundColor="bg-purple-300" title="thumb">
        <LinkButton text="weird thumb fractal thing" href="/thumb" />
      </ProjectSection>

      <ProjectSection backgroundColor="bg-yellow-300" title="rubiks">
        <LinkButton text="rubiks cube" href="/rubiks" />
      </ProjectSection>
    </div>
  );
};

export default Home;
