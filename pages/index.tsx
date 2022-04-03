import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react';
import { isMobile } from 'react-device-detect';
import RubiksCubePreview from '../components/RubiksCube/RubiksCubePreview';
import ColumnSection from '../components/ui/ColumnSection';
import GitHubIcon from '../components/ui/GitHubIcon';
import LinkButton from '../components/ui/LinkButton';
import ProjectSection from '../components/ui/ProjectSection';

// from tailwind palette: https://tailwindcss.com/docs/customizing-colors
const colors = [
  'fuchsia',
  'rose',
  'orange',
  'indigo',
  'sky',
  'purple',
  'pink',
  'blue',
];

const getShuffledColors = (colors: string[]) =>
  [...colors].sort(() => (Math.random() > 0.5 ? 1 : -1));

const Home: NextPage = () => {
  const sectionColors = useMemo(() => {
    const SECTION_COUNT = 20; //update if more than 50 project sections
    const output = [];
    const firstColorShuffle = getShuffledColors(colors).map((color) => {
      return (shade: '300' | '400') => `bg-${color}-${shade}`;
    });
    while (output.length < SECTION_COUNT) output.push(...firstColorShuffle);
    console.log(output.map((f) => f('300')));
    return output;
  }, []);

  if (isMobile)
    return (
      <div className="grid w-full h-[100vh] bg-rose-400 text-white text-4xl text-center place-content-center">
        please view this page on desktop, it&apos;s not made for mobile devices
      </div>
    );

  return (
    <div
      className={`h-screen overflow-y-scroll text-white snap snap-y snap-mandatory ${sectionColors[0](
        '300'
      )}`}
    >
      <div className="grid w-full h-screen place-content-center snap-start ">
        <h1 className="text-5xl italic font-bold">🔥 Jan Czerwiński 🔥</h1>
        <h3 className="flex w-full ml-8">
          refresh the page if you don&apos;t like the colors...
        </h3>
      </div>

      <ProjectSection backgroundColor={sectionColors[1]('300')} title="rubik's">
        <ColumnSection
          columns="two"
          noFrameMedia={true}
          copy={
            <>
              <div>
                Rubiks cube simulation made in three.js with react-three-fiber.
                You can preview different Rubik&apos;s cube algoritms by just
                pasting them into the input!
              </div>
              <div className="flex justify-end w-full py-5 space-x-8">
                <GitHubIcon link="https://github.com/jan-czerwinski/portfolio-v2" />
                <LinkButton
                  backgroundColor={sectionColors[1]('400')}
                  text="👉 click me 👉"
                  href="/rubiks"
                />
              </div>
            </>
          }
          media={<RubiksCubePreview />}
        />
      </ProjectSection>

      <ProjectSection backgroundColor={sectionColors[2]('300')} title="maze">
        <ColumnSection
          columns="two"
          copy={
            <>
              <div>
                Maze generator and solver. It uses randomized DFS to generate
                the labirynth, and Dijkstra&apos;s algorithm to solve it.
              </div>
              <div className="flex justify-end w-full py-5 space-x-8">
                <GitHubIcon link="https://github.com/jan-czerwinski/portfolio-v2" />
                <LinkButton
                  backgroundColor={sectionColors[2]('400')}
                  text="🐂 click me to see a maze 🐂"
                  href="/maze"
                />
              </div>
            </>
          }
          media={
            <Link href="/maze" passHref>
              <a>
                <video
                  className="border border-black"
                  width={400}
                  height={400}
                  src="/maze.mp4"
                  autoPlay={true}
                  loop
                  muted
                ></video>
              </a>
            </Link>
          }
        />
      </ProjectSection>

      <ProjectSection
        backgroundColor={sectionColors[3]('300')}
        title="hackathon bot"
      >
        <ColumnSection
          columns="one"
          noFrameMedia={true}
          copy={
            <>
              <div>
                Python bot that grabs the screen using OpenCV, detects entities
                and plays an arkanoid-like game using a fuzzy logic algorithm
                we&apos;ve created. It was one of the 3 tasks during a 24 hour
                Univeristy Of Technology hackathon - we&apos;ve won 3rd place.
              </div>
              <div className="flex justify-end p-2 ">
                <GitHubIcon link="https://github.com/jan-czerwinski/hackathon-2022-bot" />
              </div>
            </>
          }
          media={
            <Image
              src="/hackathon_bot.gif"
              alt="👾 bot playing arkanoid like game 👾"
              width={600}
              height={320}
            />
          }
        />
      </ProjectSection>

      <ProjectSection backgroundColor={sectionColors[4]('300')} title="thumb">
        <ColumnSection
          columns="one"
          noFrameMedia={true}
          copy={
            <>
              <div>
                Fractal tree made from a 3d model of a thumb thumb - a creepy
                character from a kids show. It was made as a joke that ultimetly
                has taught me a lot about react optimization.
              </div>
              <div className="flex justify-center w-full py-5 space-x-8">
                <GitHubIcon link="https://github.com/jan-czerwinski/portfolio-v2" />
                <LinkButton
                  backgroundColor={sectionColors[4]('400')}
                  text="👎 weird thumb fractal thing 👍"
                  href="/thumb"
                />
              </div>
            </>
          }
          media={
            <Link href="/thumb" passHref>
              <a>
                <Image
                  className=""
                  src="/thumb_thumbs.jpeg"
                  alt="thumb thumb characters from spy kids movie"
                  width={300}
                  height={300}
                />
              </a>
            </Link>
          }
        />
      </ProjectSection>

      <ProjectSection
        backgroundColor={sectionColors[5]('300')}
        title="autolycus"
      >
        <ColumnSection
          columns="two"
          copy={
            <>
              <div>
                Python bot that scrapes reddit for images, reads text from them,
                creates short videos and uploads them to youtube!
              </div>
              <div className="flex justify-end p-2 ">
                <GitHubIcon link="https://github.com/jan-czerwinski/autolycus" />
              </div>
            </>
          }
          media={
            <iframe
              width="340"
              height="600"
              src="https://www.youtube.com/embed/E24PtI0u28E"
              title="YouTube video player"
              frameBorder="10"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          }
        />
      </ProjectSection>

      <ProjectSection
        backgroundColor={sectionColors[6]('300')}
        title="word clock"
      >
        <ColumnSection
          columns="two"
          copy={
            <>
              <div>
                Word clock I designed and created. It&apos;s runing a nodejs
                bluetooth server on a RaspberryPi. It can be controlled via a
                python desktop app or a Xamarin Forms mobile app. It even has a
                snake gamemode!
              </div>
              <div className="flex justify-end p-2 ">
                <GitHubIcon link="https://github.com/jan-czerwinski/clock" />
              </div>
            </>
          }
          media={
            <Image
              src="/word_clock.png"
              alt="word clock"
              width={498}
              height={526}
            />
          }
        />
      </ProjectSection>

      {/* <ProjectSection backgroundColor="bg-blue-300" title="game of life">
        <ColumnSection
          columns="two"
          noFrameMedia={true}
          copy={
            <>
              <div>React Game of Life implementation.</div>
              <div className="flex justify-center w-full py-5 space-x-8">
                <GitHubIcon link="https://github.com/jan-czerwinski/portfolio-v2" />
                <LinkButton
                  backgroundColor="bg-blue-400"
                  text="💖 game of life 💖"
                  href="/gameoflife"
                />
              </div>
            </>
          }
          media={<div>TODO add game of life preview</div>}
        />
      </ProjectSection> */}

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
