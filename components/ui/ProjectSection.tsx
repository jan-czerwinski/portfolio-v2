import { useEffect } from 'react';

type ProjectSectionProps = React.PropsWithChildren<{
  title: string;
  backgroundColor: string;
}>;

const getTextColor = (bgColor: string) => {
  if (!bgColor) {
    return '';
  }
  return parseInt(bgColor.replace('#', ''), 16) > 0xffffff / 2
    ? '#000'
    : '#fff';
};

const ProjectSection = ({
  title,
  backgroundColor,
  children,
}: ProjectSectionProps) => {
  useEffect(() => {
    getTextColor(backgroundColor);
  }, [backgroundColor]);
  return (
    <div
      className={`h-screen transform skew-y-3 snap-start`}
      style={{
        backgroundColor: backgroundColor,
        color: getTextColor(backgroundColor),
      }}
    >
      <h1 className="w-4/5 mx-auto mb-8 text-6xl font-bold">{title}</h1>
      <div className="flex h-full pb-[8rem] transform -skew-y-3">
        {children}
      </div>
    </div>
  );
};

export default ProjectSection;
