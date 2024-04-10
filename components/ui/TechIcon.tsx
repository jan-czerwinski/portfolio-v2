import clsx from "clsx";
import { useState } from "react";
import { FaReact } from "react-icons/fa";
import { FaGolang } from "react-icons/fa6";
import {
  SiCsharp,
  SiFirebase,
  SiGithub,
  SiGooglecloud,
  SiOpencv,
  SiPython,
  SiSvelte,
  SiSwift,
  SiTypescript,
  SiXamarin,
} from "react-icons/si";

import { TbBrandNextjs, TbBrandThreejs } from "react-icons/tb";

type TechIconProps = {
  name:
    | "react"
    | "svelte"
    | "swift"
    | "firebase"
    | "github"
    | "python"
    | "threejs"
    | "opencv"
    | "csharp"
    | "xamarin"
    | "nextjs"
    | "typescript"
    | "gcp"
    | "go";
  link?: string;
};
export const TechIcon = ({ name, link }: TechIconProps) => {
  let Icon = null;
  switch (name) {
    case "react":
      Icon = FaReact;
      break;
    case "svelte":
      Icon = SiSvelte;
      break;
    case "swift":
      Icon = SiSwift;
      break;
    case "firebase":
      Icon = SiFirebase;
      break;
    case "github":
      Icon = SiGithub;
      break;
    case "python":
      Icon = SiPython;
      break;
    case "threejs":
      Icon = TbBrandThreejs;
      break;
    case "opencv":
      Icon = SiOpencv;
      break;
    case "xamarin":
      Icon = SiXamarin;
      break;
    case "csharp":
      Icon = SiCsharp;
      break;
    case "nextjs":
      Icon = TbBrandNextjs;
      break;
    case "typescript":
      Icon = SiTypescript;
      break;

    case "gcp":
      Icon = SiGooglecloud;
      break;

    case "go":
      Icon = FaGolang;
      break;

    // case "":
    //   Icon = ;
    //   break;

    // case "":
    //   Icon = ;
    //   break;
  }

  const [hovered, setHovered] = useState(false);
  return (
    <div
      className="relative cursor-pointer"
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <Icon href={link} size={60} />

      {hovered && (
        <div
          className={clsx(
            "invisible absolute w-48   translate-y-4 translate-x-[calc(30px-50%)] bg-white/60 text-xl text-black  transform duration-300 ease-in-out",
            hovered && " !visible"
          )}
        >
          {name}
        </div>
      )}
    </div>
  );
};
