import { ReactNode } from "react";
import { isMobile } from "react-device-detect";
import { getBgAndTextColorStyle } from "../utils/colorUtils";
import { NotAvailableMobile } from "./NotAvailableMobile";
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

  if (isMobile) return <NotAvailableMobile />;

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
