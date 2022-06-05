export const getContrastColor = (bgColor: string) => {
  return parseInt(bgColor.replace('#', ''), 16) > 0xffffff / 2
    ? '#000'
    : '#fff';
};

export const getBgAndTextColorStyle = (
  bgColor: string,
  background?: boolean,
  font?: boolean,
  border?: boolean
) => {
  return {
    backgroundColor: bgColor,
    color: getContrastColor(bgColor),
    borderColor: getContrastColor(bgColor),
  };
};
export const getOpposingBgStyle = (bgColor: string) => {
  return {
    backgroundColor: getContrastColor(bgColor),
  };
};
