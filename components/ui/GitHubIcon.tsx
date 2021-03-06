import Image from 'next/image';

type GitHubIconProps = {
  link: string;
  color: '#000' | '#fff';
};
const GitHubIcon = ({ link, color }: GitHubIconProps) => {
  const size = 60;
  return (
    <a href={link}>
      <Image
        className={color === '#fff' ? 'invert' : ''}
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        alt="github icon"
        width={size}
        height={size}
      />
    </a>
  );
};

export default GitHubIcon;
