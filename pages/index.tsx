import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useState } from 'react';
import { isMobile } from 'react-device-detect';
import RubiksCubePreview from '../components/RubiksCube/RubiksCubePreview';
import ColumnSection from '../components/ui/ColumnSection';
import GitHubIcon from '../components/ui/GitHubIcon';
import LinkButton from '../components/ui/LinkButton';
import ProjectSection from '../components/ui/ProjectSection';
import COLOR_PALLETES from 'nice-color-palettes';
import { getBgAndTextColorStyle, getContrastColor } from '../utils/colorUtils';

const Home: NextPage = () => {
  const [sectionColors, setSectionColors] = useState<string[]>();
  useEffect(() => {
    let aLotOfColors: string[] = []; //array of a lot of colors so we dont run out - ugly, but works
    const randomColorPallete =
      COLOR_PALLETES[Math.floor(Math.random() * COLOR_PALLETES.length)];
    for (let i = 0; i < 100; i++) {
      aLotOfColors = [...aLotOfColors, ...randomColorPallete];
    }
    console.log(aLotOfColors);
    setSectionColors(aLotOfColors);
  }, []);

  if (isMobile)
    return (
      <div className="grid w-full h-[100vh] bg-rose-400 text-white text-4xl text-center place-content-center">
        please view this page on desktop, it&apos;s not made for mobile devices
      </div>
    );
  if (!sectionColors)
    return (
      <div className="grid w-full h-[100vh] bg-rose-400 text-white text-4xl text-center place-content-center">
        loading
      </div>
    );

  return (
    <div
      className={`h-screen overflow-y-scroll text-white snap snap-y snap-mandatory`}
      style={getBgAndTextColorStyle(sectionColors[0])}
    >
      <div
        className={`grid w-full h-screen place-content-center snap-start sectionColors`}
        style={getBgAndTextColorStyle(sectionColors[0])}
      >
        <h1 className="text-5xl italic font-bold">🔥 Jan Czerwiński 🔥</h1>
        <h3 className="flex justify-end w-full mt-1">
          refresh the page if you don&apos;t like the colors...
        </h3>
      </div>

      <ProjectSection backgroundColor={sectionColors[1]} title="rubik's">
        <ColumnSection
          backgroundColor={sectionColors[1]}
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
                <GitHubIcon
                  link="https://github.com/jan-czerwinski/portfolio-v2"
                  color={getContrastColor(sectionColors[1])}
                />
                <LinkButton
                  backgroundColor={sectionColors[1]}
                  text="👉 click me 👉"
                  href="/rubiks"
                />
              </div>
            </>
          }
          media={<RubiksCubePreview />}
        />
      </ProjectSection>

      <ProjectSection backgroundColor={sectionColors[2]} title="maze">
        <ColumnSection
          backgroundColor={sectionColors[2]}
          columns="two"
          copy={
            <>
              <div>
                Maze generator and solver. It uses randomized DFS to generate
                the labirynth, and Dijkstra&apos;s algorithm to solve it.
              </div>
              <div className="flex justify-end w-full py-5 space-x-8">
                <GitHubIcon
                  link="https://github.com/jan-czerwinski/portfolio-v2"
                  color={getContrastColor(sectionColors[2])}
                />
                <LinkButton
                  backgroundColor={sectionColors[2]}
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

      <ProjectSection backgroundColor={sectionColors[3]} title="hackathon bot">
        <ColumnSection
          backgroundColor={sectionColors[3]}
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
                <GitHubIcon
                  link="https://github.com/jan-czerwinski/hackathon-2022-bot"
                  color={getContrastColor(sectionColors[2])}
                />
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

      <ProjectSection backgroundColor={sectionColors[4]} title="thumb">
        <ColumnSection
          backgroundColor={sectionColors[4]}
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
                <GitHubIcon
                  link="https://github.com/jan-czerwinski/portfolio-v2"
                  color={getContrastColor(sectionColors[4])}
                />
                <LinkButton
                  backgroundColor={sectionColors[4]}
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

      <ProjectSection backgroundColor={sectionColors[5]} title="autolycus">
        <ColumnSection
          backgroundColor={sectionColors[5]}
          columns="two"
          copy={
            <>
              <div>
                Python bot that scrapes reddit for images, reads text from them,
                creates short videos and uploads them to youtube!
              </div>
              <div className="flex justify-end p-2 ">
                <GitHubIcon
                  link="https://github.com/jan-czerwinski/autolycus"
                  color={getContrastColor(sectionColors[5])}
                />
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

      <ProjectSection backgroundColor={sectionColors[6]} title="word clock">
        <ColumnSection
          backgroundColor={sectionColors[6]}
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
                <GitHubIcon
                  link="https://github.com/jan-czerwinski/clock"
                  color={getContrastColor(sectionColors[6])}
                />
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

      <ProjectSection backgroundColor={sectionColors[7]} title="wasm smth">
        <ColumnSection
          backgroundColor={sectionColors[7]}
          columns="two"
          copy={
            <>
              <div>wasm go something idk yet</div>
              <div className="flex justify-end p-2 "></div>
            </>
          }
          media={
            <Image
              src="/word_clock.png"
              alt="word clock"
              width={20}
              height={20}
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
                <GitHubIcon link="https://github.com/jan-czerwinski/portfolio-v2"  />
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
