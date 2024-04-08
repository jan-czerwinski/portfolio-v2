import clsx from "clsx";
import { useEffect } from "react";
import { useMenuContext } from "../../utils/MenuContext";
import {
  getBgAndTextColorStyle,
  getBlackWhiteOppostie,
} from "../../utils/colorUtils";
import { useInView } from "../../utils/useInView";

type ProjectSectionProps = React.PropsWithChildren<{
  title: string;
  backgroundColor: string;
}>;

const ProjectSection = ({
  title,
  backgroundColor,
  children,
}: ProjectSectionProps) => {
  const id = `${title}_id`;
  const { inView } = useInView(id);
  const { setMyStringState } = useMenuContext();

  useEffect(() => {
    if (inView) {
      setMyStringState(backgroundColor);
    }
  }, [inView, backgroundColor, setMyStringState]);

  return (
    <div
      id={id}
      className={clsx(
        `h-screen transform skew-y-1 snap-start`,
        getBlackWhiteOppostie(backgroundColor)
      )}
      style={getBgAndTextColorStyle(backgroundColor)}
    >
      <h1 className="w-4/5 mx-auto mb-8 text-6xl font-bold">{title}</h1>
      <div className="flex h-full pb-[8rem] transform -skew-y-1">
        {children}
      </div>
    </div>
  );
};

export default ProjectSection;
