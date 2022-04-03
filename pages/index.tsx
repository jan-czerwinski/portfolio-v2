import type { NextPage } from 'next';
import ProjectSection from '../components/ui/ProjectSection';
import LinkButton from '../components/ui/LinkButton';
import Image from 'next/image';
import RubiksCubePreview from '../components/RubiksCube/RubiksCubePreview';

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-y-scroll text-white bg-teal-300 snap snap-y snap-mandatory">
      <div className="grid w-full h-screen place-content-center snap-start ">
        <h1 className="text-5xl italic font-bold">🔥 Jan Czerwiński 🔥</h1>
        {/* <h2 className="w-full text-center">🔥 Full Stack Developer </h2> */}
      </div>

      <ProjectSection backgroundColor="bg-fuchsia-300" title="rubik's">
        <div className="box-border grid justify-center w-full grid-cols-2 grid-rows-1 px-16">
          <div className="self-center text-5xl">
            <div>
              Rubiks cube simulation made in three.js with react-three-fiber.
              You can preview different Rubik&apos;s cube algoritms by just
              pasting them into the input!
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

      <ProjectSection backgroundColor="bg-rose-300" title="maze">
        <div className="box-border grid justify-center w-full grid-cols-2 grid-rows-1 px-16  bg-">
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
        <div className="box-border w-full px-16">
          <div className="flex justify-center">
            <Image
              src="/thumb_thumbs.jpeg"
              alt="thumb thumb characters from spy kids movie"
              width={500}
              height={500}
            />
          </div>
          <div className="self-center text-5xl px-80">
            <div>
              A fractal tree made from a 3d model of a thumb thumb - a creepy
              character from a kids show. It was made as a joke that ultimetly
              has taught me a lot about react optimization.
            </div>
            <div className="flex justify-center w-full py-5">
              <LinkButton
                backgroundColor="bg-blue-300"
                text="👎 weird thumb fractal thing 👍"
                href="/thumb"
              />
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection backgroundColor="bg-blue-300" title="game of life">
        <div className="box-border grid justify-center w-full grid-cols-2 grid-rows-1 px-16">
          <div className="self-center text-5xl">
            <q>
              The greatest glory in living lies not in never falling, but in
              rising every time we fall.
              <br /> ~ Nelson Mandela
            </q>

            <div className="flex justify-end w-full py-5">
              <LinkButton
                backgroundColor="bg-blue-300"
                text="💖 game of life 💖"
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
                alt="👾 bot playing arkanoid like game 👾"
                width={480}
                height={268}
              />
            </div>
          </div>
          <div className="w-3/5 mx-auto text-5xl">
            <div>
              A bot that grabs the screen and plays an arkanoid-like game using
              a fuzzy logic algorithm we&apos;ve created. It was one of the 3
              tasks during a 24 hour Univeristy Of Technology hackathon.
              We&apos;ve won 3rd place.
            </div>
          </div>
        </div>
      </ProjectSection>

      <ProjectSection backgroundColor="bg-orange-300" title="autolycus">
        <div className="box-border grid items-center w-full grid-cols-2 px-16">
          <div className="text-5xl text-center">
            <div>
              A python bot that scrapes reddit for images, reads text from them,
              creates short videos and uploads them to youtube!
            </div>
          </div>
          <div className="flex justify-center jh-8">
            <iframe
              width="450"
              height="800"
              src="https://www.youtube.com/embed/E24PtI0u28E"
              title="YouTube video player"
              frameBorder="10"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </ProjectSection>

      {/* 
      <ProjectSection
        backgroundColor="bg-pink-300"
        title="Thank you for visiting my page!"
      >
        <div className="grid items-center justify-center w-full grid-cols-3 text-center">
          <div>frog1</div>
          <div>Thank you for visiting my page!</div>

          <div>frog2</div>
        </div>
      </ProjectSection> */}
    </div>
  );
};

export default Home;
