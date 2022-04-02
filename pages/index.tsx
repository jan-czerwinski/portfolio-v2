import type { NextPage } from 'next';
import Link from 'next/link';

type HeadlineProps = { text: string };
const Headline = ({ text }: HeadlineProps) => (
  <h1 className="w-4/5 mx-auto mb-8 text-6xl font-bold">{text}</h1>
);

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-teal-300 snap snap-y snap-mandatory text-white">
      <div className="grid w-full h-screen transform place-content-center snap-start ">
        <h1 className="italic font-bold  text-7xl">Jan Czerwiński</h1>
      </div>

      <div className="h-screen mt-10 transform skew-y-3 bg-green-300 snap-start">
        <Headline text="maze" />
        <div className="grid transform -skew-y-3 place-content-center">
          <Link href="/maze" passHref>
            <button className="text-lg border border-white rounded-md">
              maze here
            </button>
          </Link>
        </div>
      </div>

      <div className="h-screen transform skew-y-3 bg-blue-300 snap-start">
        <Headline text="game of life" />
        <div className="grid transform -skew-y-3 place-content-center">
          <div>
            This is my implementation of John Conway&apos;s <a>Game Of Life</a>.
          </div>
          <Link href="/gameoflife" passHref>
            <button className="text-lg  border border-white rounded-md">
              game of life
            </button>
          </Link>
        </div>
      </div>

      <div className="h-screen transform skew-y-3 bg-purple-300 snap-start">
        <Headline text="thumb" />
        <div className="grid transform -skew-y-3 place-content-center">
          <Link href="/thumb" passHref>
            <button className="text-lg border border-white rounded-md">
              weird thumb fractal thing
            </button>
          </Link>
        </div>
      </div>

      <div className="h-screen transform skew-y-3 bg-yellow-300 snap-start">
        <Headline text="rubiks cube" />
        <div className="grid transform -skew-y-3 place-content-center">
          <Link href="/rubiks" passHref>
            <button className="text-lg border border-white rounded-md">
              rubiks cube wip
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
