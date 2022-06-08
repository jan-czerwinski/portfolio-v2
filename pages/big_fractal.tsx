import Image from 'next/image';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

const Fractal = () => {
  return (
    <div className="w-screen h-screen">
      <TransformWrapper
        initialScale={1}
        initialPositionX={0}
        initialPositionY={0}
        centerOnInit={true}
        maxScale={100}
        minScale={0.6}
        limitToBounds={false}
      >
        <TransformComponent>
          <Image
            src="/big_fractal.png"
            alt="big fractal"
            width={40000}
            height={40000}
          />
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default Fractal;
