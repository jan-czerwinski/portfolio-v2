import { ReactNode } from "react";
import { getOpposingBgStyle } from "../../utils/colorUtils";

type ColumnSectionProps = {
  copy: ReactNode;
  media?: ReactNode;
  noFrameMedia?: boolean;
  techIcons?: ReactNode;
  columns: "one" | "two";
  backgroundColor: string;
};

const ColumnSection = ({
  columns,
  noFrameMedia,
  copy,
  media,
  backgroundColor,
  techIcons,
}: ColumnSectionProps) => {
  if (columns === "one")
    return (
      <div className="box-border w-full px-16">
        <div
          className="p-2 mx-auto mb-8 rounded-md w-fit"
          style={getOpposingBgStyle(backgroundColor)}
        >
          {media}
        </div>

        <div className="w-[1000px] text-justify mx-auto text-4xl">
          {copy}
          {techIcons && (
            <div className="flex justify-end p-2 gap-4 ">{techIcons}</div>
          )}
        </div>
      </div>
    );

  return (
    <div className="box-border grid items-center w-full grid-cols-2 px-16">
      <div className="text-4xl text-center ">{copy}</div>
      <div className="flex flex-col justify-center gap-4">
        <div
          className={`p-2 rounded-md w-fit h-fit `}
          style={noFrameMedia ? {} : getOpposingBgStyle(backgroundColor)}
        >
          {media}
          {techIcons && (
            <div className="flex justify-center   p-2 gap-4  pb-4">
              {techIcons}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ColumnSection;
