import clsx from "clsx";
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { LuClock1 } from "react-icons/lu";
import {
  SiCsharp,
  SiFirebase,
  SiGithub,
  SiGooglecloud,
  SiOpencv,
  SiPython,
  SiStrapi,
  SiSvelte,
  SiSwift,
  SiTypescript,
  SiXamarin,
} from "react-icons/si";
import { TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";
import { useColorContext } from "../../utils/ColorContext";
import { blackWhiteOpposite } from "../../utils/colorUtils";

const iconComponents = {
  react: FaReact,
  svelte: SiSvelte,
  swift: SiSwift,
  firebase: SiFirebase,
  github: SiGithub,
  python: SiPython,
  threejs: TbBrandThreejs,
  opencv: SiOpencv,
  xamarin: SiXamarin,
  csharp: SiCsharp,
  nextjs: TbBrandNextjs,
  typescript: SiTypescript,
  gcp: SiGooglecloud,
  // go: FaGolang,
  strapi: SiStrapi,
  clock: LuClock1,
};

type TechIconType = keyof typeof iconComponents;

type TechIconProps = {
  link?: string;
  name: TechIconType;
  size?: number;
};
export const TechIcon = ({ name, link, size }: TechIconProps) => {
  const Icon = iconComponents[name];
  const defaultSize = 60;

  const [hovered, setHovered] = useState(false);

  const { color } = useColorContext();
  return (
    <div
      className={clsx(
        "relative cursor-pointer",
        blackWhiteOpposite(color).text
      )}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon href={link} size={size || defaultSize} />
      {hovered && (
        <div
          className={clsx(
            "absolute w-48 hover:border-2 hover:border-red-600  text-center translate-y-4 -translate-x-1/2  text-xl  transform duration-300 ease-in-out ",
            "top-full left-1/2",
            color === "#000" ? "bg-white text-black" : "bg-black text-white"
          )}
        >
          {name}
        </div>
      )}
    </div>
  );
};
