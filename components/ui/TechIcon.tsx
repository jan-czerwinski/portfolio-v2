import clsx from "clsx";
import { useState } from "react";
import { FaAws, FaReact } from "react-icons/fa";
import { LuClock1 } from "react-icons/lu";
import {
  SiCsharp,
  SiFirebase,
  SiGithub,
  SiGooglecloud,
  SiMicrosoftazure,
  SiOpencv,
  SiPython,
  SiRedux,
  SiRuby,
  SiSelenium,
  SiStrapi,
  SiSvelte,
  SiSwift,
  SiTypescript,
  SiXamarin,
} from "react-icons/si";

import Link from "next/link";
import { FaDigitalOcean } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import { SiFastapi, SiTailwindcss, SiVercel } from "react-icons/si";
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
  c_sharp: SiCsharp,
  nextjs: TbBrandNextjs,
  typescript: SiTypescript,
  gcp: SiGooglecloud,
  strapi: SiStrapi,
  clock: LuClock1,
  azure: SiMicrosoftazure,
  go: FaGolang,
  ruby: SiRuby,
  aws: FaAws,
  redux: SiRedux,
  tailwind: SiTailwindcss,
  fastapi: SiFastapi,
  react_native: FaReact,
  digital_ocean: FaDigitalOcean,
  vercel: SiVercel,
  selenium: SiSelenium,
};

type TechIconType = keyof typeof iconComponents;

type TechIconProps = {
  link?: string;
  name: TechIconType;
  disablePopup?: boolean;
  size?: number;
};
export const TechIcon = ({ name, link, size, disablePopup }: TechIconProps) => {
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
      {link ? (
        <Link href={link} passHref>
          <Icon size={size || defaultSize} />
        </Link>
      ) : (
        <Icon size={size || defaultSize} />
      )}

      {hovered && !disablePopup && (
        <div
          className={clsx(
            "absolute w-48 hover:border-2 hover:border-red-600  text-center translate-y-4 -translate-x-1/2  text-xl  transform duration-300 ease-in-out ",
            "top-full left-1/2",
            color === "#000" ? "bg-white text-black" : "bg-black text-white"
          )}
        >
          {name.replaceAll("_", " ")}
        </div>
      )}
    </div>
  );
};
