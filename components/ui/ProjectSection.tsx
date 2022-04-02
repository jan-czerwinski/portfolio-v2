type ProjectSectionProps = {
  title: string;
  backgroundColor: string;
};

const ProjectSection: React.FC<ProjectSectionProps> = ({
  title,
  backgroundColor,
  children,
}) => {
  return (
    <div>
      <div
        className={`h-screen  transform skew-y-3 snap-start ${backgroundColor}`}
      >
        <h1 className="w-4/5 mx-auto mb-8 text-xl font-bold">{title}</h1>
        <div className="grid transform -skew-y-3 place-content-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
