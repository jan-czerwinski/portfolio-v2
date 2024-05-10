import Image from "next/image";
import { BlackOrWhite } from "../../utils/colorUtils";

type GitHubIconProps = {
  link: string;
  color: BlackOrWhite;
};
const GitHubIcon = ({ link, color }: GitHubIconProps) => {
  const size = 60;
  return (
    <a href={link}>
      <Image
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="github icon"
        width={size}
        height={size}
      />
    </a>
  );
};

export default GitHubIcon;
