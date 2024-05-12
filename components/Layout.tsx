import { ReactNode } from "react";
import { isMobile } from "react-device-detect";
import { getBgAndTextColorStyle } from "../utils/colorUtils";
import { Menu } from "./home/Menu";

type LayoutProps = { children: ReactNode };
export const Layout = ({ children }: LayoutProps) => {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // const handleMouseMove = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ) => {
  //   setMousePosition({ x: event.clientX, y: event.clientY });
  //   // console.log({ mousePosition });
  // };

  if (isMobile)
    return (
      <div className="grid w-full h-[100vh] bg-rose-400 text-white text-4xl text-center place-content-center">
        Sorry, this page is not yet available on mobile devices. I&apos;m
        working on it, for now please view this website on your desktop.
      </div>
    );

  return (
    <div
      className={`h-screen overflow-y-scroll text-black snap snap-y snap-mandatory`}
      style={getBgAndTextColorStyle("#FFF")}
    >
      <Menu />
      {children}
    </div>
  );
};
