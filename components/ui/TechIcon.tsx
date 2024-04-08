import { FaReact } from "react-icons/fa";
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
    | "gcp";
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

    // case "":
    //   Icon = ;
    //   break;

    // case "":
    //   Icon = ;
    //   break;

    // case "":
    //   Icon = ;
    //   break;
  }

  return <Icon href={link} size={60} />;
};
