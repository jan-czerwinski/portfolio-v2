import type { NextPage } from 'next';
import ProjectSection from '../components/ui/ProjectSection';
import LinkButton from '../components/ui/LinkButton';
import Image from 'next/image';
import RubiksCubePreview from '../components/RubiksCube/RubiksCubePreview';

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-y-scroll text-white bg-teal-300 snap snap-y snap-mandatory">
      <div className="grid w-full h-screen place-content-center snap-start ">
        <h1 className="text-4xl italic font-bold">Jan Czerwiński</h1>
      </div>

      <ProjectSection backgroundColor="bg-fuchsia-300" title="rubiks">
        <div className="box-border grid justify-center w-full grid-cols-2 grid-rows-1 px-16">
          <div className="self-center text-5xl">
            <div>
              Rubiks cube simulation made in three.js with react-three-fiber.
              You can preview different Rubik&apos;s cube algoritms by just
              pasting them in the input!
            </div>
            <div className="flex justify-end w-full py-5">
              <LinkButton
                backgroundColor="bg-blue-300"
                text="👉 check it out 👉"
                href="/rubiks"
              />
            </div>
          </div>
          <div className="justify-center h-8 mx-auto">
            <RubiksCubePreview />
          </div>
        </div>
      </ProjectSection>

      <ProjectSection backgroundColor="bg-green-300" title="maze">
        <div className="box-border grid justify-center w-full grid-cols-2 grid-rows-1 px-16">
          <div className="self-center text-5xl">
            <div>
              Maze generator and solver. It uses randomized DFS to generate the
              labirynth, and Dijkstra&apos;s algorithm to solve it.
            </div>
            <div className="flex justify-end w-full py-5">
              <LinkButton
                backgroundColor="bg-blue-300"
                text="🐂 maze solver 🐂"
                href="/maze"
              />
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection backgroundColor="bg-purple-300" title="thumb">
        <div className="box-border grid justify-center w-full grid-cols-2 grid-rows-1 px-16">
          <div className="self-center text-5xl">
            <div>
              A fractal tree made from a 3d model of a thumb thumb - a creepy
              character from a kids show. It&apos;s a joke i couldn&apos;t
              resist making that turned out to teach me quite a bit about react
              optimization!
            </div>
            <div className="flex justify-end w-full py-5">
              <LinkButton
                backgroundColor="bg-blue-300"
                text="weird thumb fractal thing"
                href="/thumb"
              />
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection backgroundColor="bg-blue-300" title="game of life">
        <div className="box-border grid justify-center w-full grid-cols-2 grid-rows-1 px-16">
          <div className="self-center text-5xl">
            <div>game of life conway something</div>
            <div className="flex justify-end w-full py-5">
              <LinkButton
                backgroundColor="bg-blue-300"
                text="game of life"
                href="/gameoflife"
              />
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection backgroundColor="bg-sky-300" title="hackathon bot">
        <div className="box-border grid w-full px-16 place-content-center">
          <div className="flex justify-center w-full jh-8">
            <div className="w-[480px] h-[268px]">
              <Image
                src="/hackathon_bot.gif"
                alt="bot playing arkanoid like game"
                width={480}
                height={268}
              />
            </div>
          </div>
          <div className="w-3/5 mx-auto text-5xl">
            <div>
              A bot that grabs the screen and plays an arkanoid like game using
              fuzzy logic. It was one of the 3 tasks during a 24 hour hackathon.
              We&apos;ve won 3rd place.
            </div>
          </div>
        </div>
      </ProjectSection>
    </div>
  );
};

export default Home;
