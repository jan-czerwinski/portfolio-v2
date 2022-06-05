import {
  getBgAndTextColorStyle,
  getOpposingBgStyle,
} from '../../utils/getOpposingColor';

type ColumnSectionProps = {
  copy: JSX.Element;
  media: JSX.Element;
  noFrameMedia?: boolean;
  columns: 'one' | 'two';
  backgroundColor: string;
};

const ColumnSection = ({
  columns,
  noFrameMedia,
  copy,
  media,
  backgroundColor,
}: ColumnSectionProps) => {
  if (columns === 'one')
    return (
      <div className="box-border w-full px-16">
        <div
          className="p-2 mx-auto mb-8 rounded-md w-fit"
          style={getOpposingBgStyle(backgroundColor)}
        >
          {media}
        </div>
        <div className="w-[1000px] text-justify mx-auto text-4xl">{copy}</div>
      </div>
    );

  return (
    <div className="box-border grid items-center w-full grid-cols-2 px-16">
      <div className="text-4xl text-center ">{copy}</div>
      <div className="flex justify-center">
        <div
          className={`p-2 rounded-md w-fit h-fit`}
          style={noFrameMedia ? {} : getOpposingBgStyle(backgroundColor)}
        >
          {media}
        </div>
      </div>
    </div>
  );
};

export default ColumnSection;
