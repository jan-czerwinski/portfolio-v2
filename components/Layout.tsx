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
        please view this page on desktop, it&apos;s not made for mobile devices
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
