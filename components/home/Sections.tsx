import Image from "next/image";
import Link from "next/link";
import { getBlackWhiteOppostie } from "../../utils/colorUtils";
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
        columns="two"
        noFrameMedia={true}
        copy={
          <div className={getBlackWhiteOppostie(color)}>
            <div>write something bout livereach</div>
            <div className="flex justify-end w-full py-5 space-x-8">
              <TechIcon name="nextjs" />
              {/* <TechIcon name="strapi" /> */}
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
          <div className={getBlackWhiteOppostie(color)}>
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
          <div className={getBlackWhiteOppostie(color)}>
            <div>
              An ios cad app. It uses SwiftUi and makes heavy use of gestures
              and the apple pencil. I can't say much about it, but it's a
              project I've been working on for a almost a year and I'm very
              excited to reveal soon.
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
          <div className={getBlackWhiteOppostie(color)}>
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
                backgroundColor={color}
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
          <div className={getBlackWhiteOppostie(color)}>
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
          <div className={getBlackWhiteOppostie(color)}>
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
                backgroundColor={color}
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
          <div className={getBlackWhiteOppostie(color)}>
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
              <GitHubIcon
                link="https://github.com/jan-czerwinski/autolycus"
                color={getContrastColor(color)}
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
          <div className={getBlackWhiteOppostie(color)}>
            <div>React Game of Life implementation.</div>
            <div className="flex justify-center w-full py-5 space-x-8">
              <GitHubIcon
                color={getContrastColor(color)}
                link="https://github.com/jan-czerwinski/portfolio-v2"
              />
              <LinkButton
                backgroundColor="bg-blue-400"
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
  coolFractal: (color: string) => (
    <ProjectSection backgroundColor={color} title="fractal cool">
      <ColumnSection
        backgroundColor={color}
        columns="two"
        copy={
          <div className={getBlackWhiteOppostie(color)}>
            <div>click here for cool fractals:</div>

            <LinkButton
              backgroundColor={color}
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
              <GitHubIcon
                link="https://github.com/jan-czerwinski/portfolio-v2"
                color={getContrastColor(color)}
              />
              <LinkButton
                backgroundColor={color}
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
          <div className={getBlackWhiteOppostie(color)}>
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
        media={<div>dupsko</div>}
      />
    </ProjectSection>
  ),
};
