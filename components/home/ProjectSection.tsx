import clsx from "clsx";
import { useEffect } from "react";
import { ColorContextProvider } from "../../utils/ColorContext";
import { useMenuContext } from "../../utils/MenuContext";
import {
  blackWhiteOpposite,
  getBgAndTextColorStyle,
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
  const { setColor } = useMenuContext();

  useEffect(() => {
    if (inView) {
      setColor(backgroundColor);
    }
  }, [inView, backgroundColor, setColor]);

  return (
    <ColorContextProvider defaultColor={backgroundColor}>
      <div
        id={id}
        className={clsx(
          `h-screen transform skew-y-1 snap-start`,
          blackWhiteOpposite(backgroundColor).text
        )}
        style={getBgAndTextColorStyle(backgroundColor)}
      >
        <h1 className="w-4/5 mx-auto mb-8 text-6xl font-bold">{title}</h1>
        <div className="flex h-full pb-[8rem] transform -skew-y-1">
          {children}
        </div>
      </div>
    </ColorContextProvider>
  );
};

export default ProjectSection;
