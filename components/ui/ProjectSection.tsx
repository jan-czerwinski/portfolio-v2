import { getBgAndTextColorStyle } from '../../utils/colorUtils';

type ProjectSectionProps = React.PropsWithChildren<{
  title: string;
  backgroundColor: string;
}>;

const ProjectSection = ({
  title,
  backgroundColor,
  children,
}: ProjectSectionProps) => {
  return (
    <div
      className={`h-screen transform skew-y-3 snap-start`}
      style={getBgAndTextColorStyle(backgroundColor)}
    >
      <h1 className="w-4/5 mx-auto mb-8 text-6xl font-bold">{title}</h1>
      <div className="flex h-full pb-[8rem] transform -skew-y-3">
        {children}
      </div>
    </div>
  );
};

export default ProjectSection;
