import { getBgAndTextColorStyle } from "../utils/colorUtils";
import { Ray } from "./ui/Ray";
type NavigationSectionProps = { color: string };

export const NavigationSection = ({ color }: NavigationSectionProps) => {
  return (
    <div
      className={`grid  w-full h-screen place-content-center snap-start sectionColors`}
      id="entry_id"
      style={getBgAndTextColorStyle(color)}
    >
      <div className="grid h-0 w-0 ">
        <Ray animationIdx={0} className="rotate-[42deg]">
          <div>hobby projects</div>
          <div className="bg-white text-5xl">ssawjsdhkdajk</div>
        </Ray>
      </div>
    </div>
  );
};
