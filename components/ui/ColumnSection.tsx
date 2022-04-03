type ColumnSectionProps = {
  copy: JSX.Element;
  media: JSX.Element;
  noFrameMedia?: boolean;
  columns: 'one' | 'two';
};

const ColumnSection = ({
  columns,
  noFrameMedia,
  copy,
  media,
}: ColumnSectionProps) => {
  if (columns === 'one')
    return (
      <div className="box-border w-full px-16">
        <div className="p-2 mx-auto mb-8 bg-white rounded-md w-fit">
          {media}
        </div>
        <div className="w-[1000px] text-justify mx-auto text-4xl">{copy}</div>
      </div>
    );

  return (
    <div className="box-border grid items-center w-full grid-cols-2 px-16">
      <div className="text-5xl text-center">{copy}</div>
      <div className="flex justify-center">
        <div
          className={`p-2 rounded-md w-fit h-fit ${
            noFrameMedia ? '' : 'bg-white'
          }`}
        >
          {media}
        </div>
      </div>
    </div>
  );
};

export default ColumnSection;
