import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import {
  blackWhiteOpposite,
  getBlackWhiteOppositTextClass,
} from "../../utils/colorUtils";
import RubiksCubePreview from "../RubiksCube/RubiksCubePreview";
import ColumnSection from "../ui/ColumnSection";
import LinkButton from "../ui/LinkButton";
import { TechIcon } from "../ui/TechIcon";
import ProjectSection from "./ProjectSection";

export const sections = {
  livereach: (color: string) => (
    <ProjectSection
      key="livereachai"
      backgroundColor={color}
      title="livereach.ai"
    >
      <ColumnSection
        backgroundColor={color}
        columns="one"
        noFrameMedia={true}
        copy={
          <div
            className={clsx(
              "flex flex-col gap-4",
              blackWhiteOpposite(color).text,
              "text-2xl   pt-40"
            )}
          >
            <div className="flex justify-center">
              <LinkButton
                href={"https://www.livereachmedia.com/"}
                text={"website (i&apos;ve worked on the app, not the website)"}
                color={color}
              />
            </div>

            <div>
              livereach - an ai driven security hub for security specialists.
              Essentaily a webrtc camera hub with drawing tools, animated
              statistics, walls of cameras etc. I&apos;ve implemented complex
              frontend solutions involving canvas, Modeling relational
              databases, and ommunicated with designers and the client to ensure
              good user experience.
            </div>

            <div className="flex  justify-end w-full py-5 space-x-8">
              <TechIcon name="nextjs" />
              <TechIcon name="react" />
              <TechIcon name="typescript" />
            </div>
          </div>
        }
      />
    </ProjectSection>
  ),
  healthNation: (color: string) => (
    <ProjectSection
      key="healthNation"
      backgroundColor={color}
      title="Health Nation"
    >
      <ColumnSection
        backgroundColor={color}
        columns="two"
        noFrameMedia={true}
        copy={
          <div
            className={clsx(getBlackWhiteOppositTextClass(color), "text-xl")}
          >
            <div className="flex justify-end w-full py-5 space-x-8">
              <TechIcon name="react" />
              <TechIcon name="typescript" />
            </div>
          </div>
        }
      />
    </ProjectSection>
  ),
  cadaway: (color: string) => (
    <ProjectSection key="cadaway" backgroundColor={color} title="cadaway">
      <ColumnSection
        backgroundColor={color}
        columns="two"
        noFrameMedia={true}
        copy={
          <div className={blackWhiteOpposite(color).text}>
            <div>
              An ios cad app. It uses SwiftUi and makes heavy use of gestures
              and the apple pencil. I can&apos;t say much about it, but
              it&apos;s a project I&apos;ve been working on for a almost a year
              and I&apos;m very excited to reveal soon.
            </div>
            <div className="flex justify-end w-full py-5 space-x-8">
              <TechIcon name="firebase" />
              <TechIcon name="swift" />
            </div>
          </div>
        }
        // media={<RubiksCubePreview color={color} />}
      />
    </ProjectSection>
  ),
  rubiks: (color: string) => (
    <ProjectSection key="rubiks" backgroundColor={color} title="rubik's">
      <ColumnSection
        backgroundColor={color}
        columns="two"
        noFrameMedia={true}
        copy={
          <div className={getBlackWhiteOppositTextClass(color)}>
            <div>
              Rubiks cube simulation made in three.js with react-three-fiber.
              You can preview different Rubik&apos;s cube algoritms by just
              pasting them into the input!
            </div>
            <div className="flex justify-end w-full py-5 space-x-8">
              <TechIcon name="threejs" />
              <TechIcon name="react" />
              <TechIcon name="typescript" />

              <TechIcon
                name="github"
                link="https://github.com/jan-czerwinski/portfolio-v2"
              />
              <LinkButton
                color={color}
                text="👉 click me 👉"
                href={{ pathname: "/rubiks", query: { color } }}
              />
            </div>
          </div>
        }
        media={<RubiksCubePreview color={color} />}
      />
    </ProjectSection>
  ),
  wordClock: (color: string) => (
    <ProjectSection key="wordClock" backgroundColor={color} title="word clock">
      <ColumnSection
        backgroundColor={color}
        columns="two"
        copy={
          <div className={getBlackWhiteOppositTextClass(color)}>
            <div>
              Word clock I designed and created. It&apos;s runing a nodejs
              bluetooth server on a RaspberryPi. It can be controlled via a
              python desktop app or a Xamarin Forms mobile app. It even has a
              snake gamemode!
            </div>
            <div className="flex justify-end p-2 gap-4 ">
              <TechIcon name="python" />
              <TechIcon name="csharp" />
              <TechIcon name="xamarin" />
              <TechIcon
                name="github"
                link="https://github.com/jan-czerwinski/clock"
              />
            </div>
          </div>
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
  ),
  maze: (color: string) => (
    <ProjectSection key="maze" backgroundColor={color} title="maze">
      <ColumnSection
        backgroundColor={color}
        columns="two"
        copy={
          <div className={getBlackWhiteOppositTextClass(color)}>
            <div>
              Maze generator and solver. It uses randomized DFS to generate the
              labirynth, and Dijkstra&apos;s algorithm to solve it.
            </div>
            <div className="flex justify-end w-full py-5 space-x-8">
              <TechIcon name="react" />
              <TechIcon name="typescript" />

              <TechIcon
                name="github"
                link="https://github.com/jan-czerwinski/portfolio-v2"
              />
              <LinkButton
                color={color}
                text="🐂 click me to see a maze 🐂"
                href="/maze"
              />
            </div>
          </div>
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
  ),
  hackathonBot: (color: string) => (
    <ProjectSection
      key="hackathonBot"
      backgroundColor={color}
      title="hackathon bot"
    >
      <ColumnSection
        backgroundColor={color}
        columns="one"
        noFrameMedia={true}
        copy={
          <div className={getBlackWhiteOppositTextClass(color)}>
            <div>
              Python bot that grabs the screen using OpenCV, detects entities
              and plays an arkanoid-like game using a fuzzy logic algorithm
              we&apos;ve created. It was one of the 3 tasks during a 24 hour
              Univeristy Of Technology hackathon - we&apos;ve won 3rd place.
            </div>
            <div className="flex justify-end p-2 ">
              <TechIcon name="opencv" />
              <TechIcon name="python" />
              <TechIcon
                name="github"
                link="https://github.com/jan-czerwinski/hackathon-2022-bot"
              />
            </div>
          </div>
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
  ),
  auotlycus: (color: string) => (
    <ProjectSection key="autolycus" backgroundColor={color} title="autolycus">
      <ColumnSection
        backgroundColor={color}
        columns="two"
        copy={
          <>
            <div>
              Python bot that scrapes reddit for images, reads text from them,
              creates short videos and uploads them to youtube!
            </div>
            <div className="flex justify-end p-2 ">
              <TechIcon
                name="github"
                link="https://github.com/jan-czerwinski/autolycus"
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
  ),
  gameOfLife: (color: string) => (
    <ProjectSection backgroundColor={color} title="game of life">
      <ColumnSection
        columns="two"
        backgroundColor={color}
        noFrameMedia={true}
        copy={
          <div className={getBlackWhiteOppositTextClass(color)}>
            <div>React Game of Life implementation.</div>
            <div className="flex justify-center w-full py-5 space-x-8">
              <TechIcon
                name="github"
                link="https://github.com/jan-czerwinski/portfolio-v2"
              />
              <LinkButton
                color="bg-blue-400"
                text="💖 game of life 💖"
                href="/gameoflife"
              />
            </div>
          </div>
        }
        media={<div>TODO add game of life preview</div>}
      />
    </ProjectSection>
  ),
  mandelbrot: (color: string) => (
    <ProjectSection title="mandelbrot fractals" backgroundColor={color}>
      <ColumnSection
        backgroundColor={color}
        columns="one"
        copy={
          <div className={getBlackWhiteOppositTextClass(color)}>
            <div>
              A multithreaded go fractal generation programm i made in a few
              days to teach myself golang.{" "}
            </div>
            <div className="flex justify-center">
              <TechIcon name={"go"} />
            </div>
          </div>
        }
        media={
          <>
            <iframe
              width="746"
              height="420"
              src="https://www.youtube.com/embed/IV1eUcP1U20?si=5RWPICK0Shl4wL1P"
              title="fractals go"
              allowFullScreen
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </>
        }
      />
    </ProjectSection>
  ),
  coolFractal: (color: string) => (
    <ProjectSection backgroundColor={color} title="fractal cool">
      <ColumnSection
        backgroundColor={color}
        columns="two"
        copy={
          <div className={getBlackWhiteOppositTextClass(color)}>
            <div>click here for cool fractals:</div>

            <LinkButton
              color={color}
              text="cool fractal big resolution"
              href="/big_fractal"
            />
          </div>
        }
      />
    </ProjectSection>
  ),
  weirdThumbFractal: (color: string) => (
    <ProjectSection backgroundColor={color} title="thumb">
      <ColumnSection
        backgroundColor={color}
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
              <TechIcon
                name="github"
                link="https://github.com/jan-czerwinski/portfolio-v2"
              />
              <LinkButton
                color={color}
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
  ),
  website: (color: string) => (
    <ProjectSection key="website" backgroundColor={color} title="this website">
      <ColumnSection
        backgroundColor={color}
        columns="one"
        noFrameMedia={true}
        copy={
          <div className={getBlackWhiteOppositTextClass(color)}>
            <div></div>
            <div className="flex justify-end p-2 ">
              <TechIcon name="nextjs" />
              <TechIcon name="react" />
              <TechIcon name="typescript" />

              <TechIcon
                name="github"
                link="https://github.com/jan-czerwinski/hackathon-2022-bot"
              />
            </div>
          </div>
        }
        // media={<div>dupsko</div>}
      />
    </ProjectSection>
  ),
};
