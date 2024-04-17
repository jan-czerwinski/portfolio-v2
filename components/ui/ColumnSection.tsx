import clsx from "clsx";
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
      <div className="box-border w-full px-16 flex flex-col gap-8 ">
        <div
          className="p-2 mx-auto  rounded-md w-fit "
          style={getOpposingBgStyle(backgroundColor)}
        >
          {media}
        </div>

        <div className="w-[1000px] flex flex-col justify-start  text-justify mx-auto text-3xl ">
          {copy}
          {techIcons && (
            <div className="flex justify-end p-2 gap-6 ">{techIcons}</div>
          )}
        </div>
      </div>
    );

  return (
    <div className="box-border grid place-content-center  w-full grid-cols-2 px-16  gap-4">
      <div className="text-3xl text-center  flex flex-col justify-center ">
        {copy}
      </div>

      <div
        className={clsx(
          `flex flex-col  justify-center gap-10  w-full h-fit `,
          ""
        )}
      >
        <div
          className="p-2 rounded-md"
          style={noFrameMedia ? {} : getOpposingBgStyle(backgroundColor)}
        >
          {media}
        </div>
        {techIcons && (
          <div className="flex justify-center gap-6  pb-4">{techIcons}</div>
        )}
      </div>
    </div>
  );
};

export default ColumnSection;
