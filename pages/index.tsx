import type { NextPage } from 'next';
import ProjectSection from '../components/ui/ProjectSection';
import LinkButton from '../components/ui/LinkButton';
import Image from 'next/image';
import TechIconList from '../components/ui/TechList';
// import IconPython from 'react-devicon/python/original';
// import IconAndroid from 'react-devicon/android/plain-wordmark';

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-y-scroll text-white bg-teal-300 snap snap-y snap-mandatory">
      <div className="grid w-full h-screen place-content-center snap-start ">
        <h1 className="text-4xl italic font-bold">Jan Czerwiński</h1>
      </div>

      <ProjectSection backgroundColor="bg-fuchsia-300" title="rubiks">
        <div className="box-border grid w-full grid-cols-2 grid-rows-3 px-16">
          <div className="text-2xl">
            Rubiks cube simulation made in three.js with react-three-fiber. You
            can preview different Rubik&apos;s cube algoritms by just pasting
            them in the input!
          </div>
          <div className="flex justify-center h-8 col-start-2 row-start-3">
            <LinkButton text="rubiks cube" href="/rubiks" />
          </div>
        </div>
      </ProjectSection>

      <ProjectSection backgroundColor="bg-green-300" title="maze">
        <div>
          Maze generator and solver. It uses randomized DFS to generate the
          labirynth, and Dijkstra&apos;s algorithm to solve it.
        </div>
        <LinkButton text="click here for maze" href="/maze" />
      </ProjectSection>

      <ProjectSection backgroundColor="bg-purple-300" title="thumb">
        <div>
          A fractal tree made from a 3d model of a thumb thumb - a creepy
          character from a kids show. It&apos;s a joke i couldn&apos;t resist
          making that turned out to teach me quite a bit about react
          optimization!
        </div>
        <LinkButton text="weird thumb fractal thing" href="/thumb" />
      </ProjectSection>

      <ProjectSection backgroundColor="bg-blue-300" title="game of life">
        <LinkButton text="game of life" href="/gameoflife" />
      </ProjectSection>

      <ProjectSection backgroundColor="bg-sky-300" title="hackathon bot">
        <div className="box-border grid w-full grid-cols-2 grid-rows-3 px-16">
          <div>
            A bot that grabs the screen and plays an arkanoid like game using
            fuzzy logic. It was one of the 3 tasks during a 24 hour hackathon.
            We&apos;ve won 3rd place.
          </div>
          <div className="col-start-2 row-start-2">
            <div className="w-[480px] h-[268px]">
              <Image
                src="/hackathon_bot.gif"
                alt="bot playing arkanoid like game"
                width={480}
                height={268}
              />
            </div>

            <TechIconList
              technologies={[
                'python',
                'react',
                'threejs',
                'typescript',
                'tailwindcss',
                'opencv',
                'flask',
              ]}
            />
          </div>
        </div>
      </ProjectSection>
    </div>
  );
};

export default Home;
