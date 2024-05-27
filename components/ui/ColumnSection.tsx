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
      <div className="box-border justify-center w-full px-16 flex flex-col gap-8 ">
        {media && (
          <div
            className="p-2 mx-auto  rounded-md w-fit "
            style={getOpposingBgStyle(backgroundColor)}
          >
            {media}
          </div>
        )}

        <div className="w-[1000px] flex flex-col justify-start  text-justify mx-auto text-3xl ">
          {copy}
          {techIcons && (
            <div className="flex justify-end p-2 gap-6 ">{techIcons}</div>
          )}
        </div>
      </div>
    );

  return (
    <div
      className={clsx(
        "box-border flex h-full    w-full  items-center justify-center  px-16  gap-4",
        Math.random() >= 0.5 ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div className="text-3xl flex-grow flex-1 text-center  flex flex-col justify-center ">
        {copy}
      </div>

      <div
        className={clsx(
          `flex flex-col flex-grow flex-1 justify-center gap-10  w-full h-fit `,
          ""
        )}
      >
        <div
          className="flex p-2  rounded-md justify-center"
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
