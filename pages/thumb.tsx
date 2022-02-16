import { Canvas } from '@react-three/fiber';
import CameraControls from '../components/CameraControls';
import ThumbTree from '../components/thumb/ThumbTree';

const Thumb = () => {
  return (
    <div className="w-screen h-screen bg-purple-200">
      <Canvas>
        <CameraControls />
        <ThumbTree />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  );
};
export default Thumb;
