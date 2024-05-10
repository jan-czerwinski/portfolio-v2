import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import {
  blackWhiteOpposite,
  getBlackWhiteOppositTextClass,
} from "../../utils/colorUtils";
import { CompanyCard } from "../CompanyCard";
import RubiksCubePreview from "../RubiksCube/RubiksCubePreview";
import ColumnSection from "../ui/ColumnSection";
import LinkButton from "../ui/LinkButton";
import { TechIcon } from "../ui/TechIcon";
import ProjectSection from "./ProjectSection";

export const sections = {
  livereach: (color: string) => (
    <ProjectSection backgroundColor={color} title="livereach.ai">
      <ColumnSection
        backgroundColor={color}
        columns="two"
        noFrameMedia={false}
        copy={
          <div
            className={clsx(
              "flex flex-col gap-6",
              blackWhiteOpposite(color).text,
              "text-1.5xl "
            )}
          >
            <CompanyCard
              dates="2022.03 - 2023.01"
              companyName="Widelab"
              position="Senior Full Stack Web Engineer"
            />

            <div>
              livereach - an ai driven security hub for security specialists.
              Essentaily a webrtc camera hub with drawing tools, animated
              statistics, walls of cameras etc. I&apos;ve implemented the webrtc
              protol, camera walls, canvas graphing tools with data preparation
              for the ai and many more features. I was in constant contact with
              the client. <br />
              (I&apos;ve worked on the app, not the website)
            </div>

            <div className="flex justify-center">
              <LinkButton
                href={"https://www.livereachmedia.com/"}
                text={"website"}
                color={color}
              />
            </div>
          </div>
        }
        techIcons={
          <>
            <TechIcon name="nextjs" />
            <TechIcon name="react" />
            <TechIcon name="typescript" />
          </>
        }
        media={
          <video
            autoPlay
            loop
            className=" bg-red-400 rounded-md flex w-full"
            height="399"
            width="482"
          >
            <source src="/livereach.mp4" type="video/mp4" />
          </video>
        }
      />
    </ProjectSection>
  ),
  uxPin: (color: string) => (
    <ProjectSection backgroundColor={color} title="uxpin">
      <ColumnSection
        backgroundColor={color}
        columns="two"
        noFrameMedia={true}
        copy={
          <div
            className={clsx(
              "flex flex-col gap-4",
              blackWhiteOpposite(color).text,
              "text-2xl "
            )}
          >
            <CompanyCard
              dates="2021.08 - 2022.03"
              companyName="UxPin"
              position="Full Stack Web Engineer"
            />

            <div>
              I&apos;ve worked on a design system, a component library, and
              various features for the UxPin editor. I&apos;ve implemented
              complex frontend solutions involving canvas, Modeling relational
              databases, and ommunicated with designers and the client to ensure
              good user experience.
            </div>
          </div>
        }
        techIcons={
          <>
            {/* <TechIcon name="ruby" /> */}
            <TechIcon name="python" />
            <TechIcon name="typescript" />
          </>
        }
        media={
          <video
            autoPlay
            className=""
            loop
            muted
            poster="https://cdn.buttercms.com/IYPoThrRiydGW71WuqFo"
          >
            <source src="/uxpin.webm" />
          </video>
        }
      />
    </ProjectSection>
  ),
  healthNation: (color: string) => (
    <ProjectSection backgroundColor={color} title="Health Nation">
      <ColumnSection
        backgroundColor={color}
        columns="two"
        noFrameMedia={true}
        techIcons={
          <>
            <TechIcon name="react" />
            <TechIcon name="typescript" />
          </>
        }
        copy={
          <div
            className={clsx(getBlackWhiteOppositTextClass(color), "text-xl")}
          >
            <CompanyCard
              dates="2019.08 - 2021.08"
              companyName="Precise Lab"
              position="Fullstack Mobile/Web developer"
            />
          </div>
        }
        media={
          <div className="max-w-full w-[420px]  h-[500px]  relative ">
            <Image
              src={"/healthnation.webp"}
              layout="fill"
              objectFit="contain"
              alt="health nation ios app"
            />
          </div>
        }
      />
    </ProjectSection>
  ),
  cadaway: (color: string) => (
    <ProjectSection backgroundColor={color} title="cadaway">
      <ColumnSection
        backgroundColor={color}
        columns="two"
        noFrameMedia={true}
        techIcons={
          <>
            <TechIcon name="firebase" />
            <TechIcon name="swift" />
          </>
        }
        copy={
          <div className={blackWhiteOpposite(color).text}>
            <div className="text-2xl mb-4">self employed</div>

            <div>
              An ios cad app. It uses SwiftUi and makes heavy use of gestures
              and the apple pencil. I can&apos;t say much about it, but
              it&apos;s a project I&apos;ve been working on for a almost a year.
            </div>
          </div>
        }
        media={
          <div className="flex flex-col items-center gap-2">
            <TechIcon size={240} name="clock" disablePopup />
            <div className="text-2xl">coming soon...</div>
          </div>
        }
      />
    </ProjectSection>
  ),
  rubiks: (color: string) => (
    <ProjectSection backgroundColor={color} title="rubik's">
      <ColumnSection
        backgroundColor={color}
        columns="two"
        noFrameMedia={true}
        techIcons={
          <>
            <TechIcon name="threejs" />
            <TechIcon name="react" />
            <TechIcon name="typescript" />

            <TechIcon
              name="github"
              link="https://github.com/jan-czerwinski/portfolio-v2/blob/main/components/RubiksCube/RubiksCube.tsx"
            />
          </>
        }
        copy={
          <div className={getBlackWhiteOppositTextClass(color)}>
            <div>
              Rubiks cube simulation made in three.js with react-three-fiber.
              You can preview different Rubik&apos;s cube algoritms by just
              pasting them into the input.
            </div>
            <div className="flex justify-end w-full py-5 space-x-8">
              <LinkButton
                color={color}
                text="see the cube"
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
    <ProjectSection backgroundColor={color} title="word clock">
      <ColumnSection
        backgroundColor={color}
        columns="two"
        techIcons={
          <>
            <TechIcon name="python" />
            <TechIcon name="c_sharp" />
            <TechIcon name="xamarin" />
            <TechIcon
              name="github"
              link="https://github.com/jan-czerwinski/clock"
            />
          </>
        }
        copy={
          <div className={getBlackWhiteOppositTextClass(color)}>
            <div>
              Word clock I designed and created. It&apos;s runing a nodejs
              bluetooth server on a RaspberryPi. It can be controlled via a
              python desktop app or a Xamarin Forms mobile app. It even has a
              snake gamemode.
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
    <ProjectSection backgroundColor={color} title="maze">
      <ColumnSection
        backgroundColor={color}
        columns="two"
        techIcons={
          <>
            <TechIcon name="react" />
            <TechIcon name="typescript" />
            <TechIcon
              name="github"
              link="https://github.com/jan-czerwinski/portfolio-v2"
            />
          </>
        }
        copy={
          <div className={getBlackWhiteOppositTextClass(color)}>
            <div>
              Maze generator and solver. It uses randomized DFS to generate the
              labirynth, and Dijkstra&apos;s algorithm to solve it.
            </div>
            <div className="flex justify-end w-full py-5 space-x-8">
              <LinkButton
                color={color}
                text="see the maze generation"
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
    <ProjectSection backgroundColor={color} title="hackathon bot">
      <ColumnSection
        backgroundColor={color}
        columns="one"
        noFrameMedia={true}
        techIcons={
          <>
            <TechIcon name="opencv" />
            <TechIcon name="python" />
            <TechIcon
              name="github"
              link="https://github.com/jan-czerwinski/hackathon-2022-bot"
            />
          </>
        }
        copy={
          <div className={getBlackWhiteOppositTextClass(color)}>
            <div>
              Python bot that grabs the screen using OpenCV, detects entities
              and plays an arkanoid-like game using a fuzzy logic algorithm
              we&apos;ve created. It was one of the 3 tasks during a 24 hour
              Univeristy Of Technology hackathon - we&apos;ve won 3rd place.
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
    <ProjectSection backgroundColor={color} title="autolycus">
      <ColumnSection
        backgroundColor={color}
        columns="two"
        techIcons={
          <>
            <TechIcon
              name="github"
              link="https://github.com/jan-czerwinski/autolycus"
            />
          </>
        }
        copy={
          <>
            <div>
              Python bot that scrapes reddit for images, reads text from them,
              creates short videos and uploads them to youtube.
            </div>
            <div className="flex justify-end p-2 "></div>
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
        techIcons={
          <>
            <TechIcon
              name="github"
              link="https://github.com/jan-czerwinski/portfolio-v2"
            />
          </>
        }
        copy={
          <div className={getBlackWhiteOppositTextClass(color)}>
            <div>React Game of Life implementation.</div>
            <div className="flex justify-center w-full py-5 space-x-8">
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
        techIcons={
          <>
            <TechIcon name="go" />
          </>
        }
        copy={
          <div className={getBlackWhiteOppositTextClass(color)}>
            <div>
              A multithreaded go fractal generation program i made in a few days
              to teach myself golang.
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
        techIcons={
          <>
            <TechIcon
              name="github"
              link="https://github.com/jan-czerwinski/portfolio-v2"
            />
          </>
        }
        copy={
          <>
            <div>
              Fractal tree made from a 3d model of a thumb thumb - a creepy
              character from a kids show. It was made as a joke that ultimetly
              has taught me a lot about react optimization.
            </div>
            <div className="flex justify-center w-full py-5 space-x-8">
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
    <ProjectSection backgroundColor={color} title="this website">
      <ColumnSection
        backgroundColor={color}
        columns="one"
        noFrameMedia={true}
        techIcons={
          <>
            <TechIcon name="nextjs" />
            <TechIcon name="react" />
            <TechIcon name="typescript" />
            <TechIcon
              name="github"
              link="https://github.com/jan-czerwinski/portfolio-v2"
            />
          </>
        }
        copy={
          <div className={getBlackWhiteOppositTextClass(color)}>
            <div></div>
            <div className="flex justify-end p-2 "></div>
          </div>
        }
        media={
          <iframe
            width={800}
            height={600}
            // className=""
            // src="https://jan-czerwinski.vercel.app/"
            src="https://jan-czerwinski.vercel.app/"
          />
        }
        // media={<div>dupsko</div>}
      />
    </ProjectSection>
  ),
  highlights: (color: string) => (
    <ProjectSection backgroundColor={color} title="highlights ai">
      <ColumnSection
        backgroundColor={color}
        columns="one"
        noFrameMedia={true}
        techIcons={
          <>
            <TechIcon name="nextjs" />
            <TechIcon name="react" />
            <TechIcon name="typescript" />
            <TechIcon name="strapi" />
          </>
        }
        copy={
          <div
            className={clsx(
              getBlackWhiteOppositTextClass(color),
              "grid place-content-center h-full text-2xl"
            )}
          >
            <CompanyCard
              dates="2021.08 - 2022.03"
              companyName="Flyps"
              position="Senior Full Stack Web Engineer"
            />
            <div>
              Highlights AI simplifies trip planning: just input your
              destination, and it effortlessly generates a detailed itinerary,
              using the Google Maps API. Powered by LLMs like ChatGPT-4 and
              Claude 2, it ensures a seamless and personalized travel
              experience. I was hired as a specialist on maps api. I&apos;ve
              worked on that as well as the LLMs connection and parsing & much
              more.
            </div>
          </div>
        }
      />
    </ProjectSection>
  ),
};
