import type { NextPage } from 'next';

type HeadlineProps = { text: string };
const Headline = ({ text }: HeadlineProps) => (
  <h1 className="w-4/5 mx-auto mb-8 text-6xl font-bold text-white">{text}</h1>
);

const Home: NextPage = () => {
  return (
    <div className="h-screen overflow-y-scroll bg-pink-300 snap snap-y snap-mandatory">
      <div className="grid w-full h-screen transform place-content-center snap-start ">
        <h1 className="italic font-bold text-white text-7xl">Jan Czerwiński</h1>
      </div>

      <div className="h-screen mt-10 transform skew-y-3 bg-green-300 snap-start">
        <Headline text="Maze" />
        <div className="grid transform -skew-y-3 place-content-center">
          <div> hello </div>
        </div>
      </div>

      <div className="h-screen transform skew-y-3 bg-blue-300 snap-start">
        <Headline text="Game of Life" />
        <div className="grid transform -skew-y-3 place-content-center">
          <div> hello </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
