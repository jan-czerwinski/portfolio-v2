import Image from 'next/image';

type AllowedTech =
  | 'python'
  | 'react'
  | 'threejs'
  | 'typescript'
  | 'tailwindcss'
  | 'opencv'
  | 'flask';
type TechIconListProps = {
  technologies: AllowedTech[];
};

const TechIconList = ({ technologies }: TechIconListProps) => {
  const getSrc = (tech: AllowedTech) => {
    switch (tech) {
      case 'tailwindcss':
        return 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg';

      default:
        return `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`;
    }
  };

  return (
    <div className="flex w-full justify-evenly">
      {technologies.map((tech, idx) => (
        <div className="w-8 h-8" key={idx}>
          <Image
            key={idx}
            src={getSrc(tech)}
            alt="python icon"
            width={32}
            height={32}
          />
        </div>
      ))}
    </div>
  );
};

export default TechIconList;
