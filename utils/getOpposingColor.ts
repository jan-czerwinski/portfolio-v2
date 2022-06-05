export const getOpposingColor = (bgColor: string) => {
  if (!bgColor) {
    return '';
  }
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
    color: getOpposingColor(bgColor),
    borderColor: getOpposingColor(bgColor),
  };
};
export const getOpposingBgStyle = (bgColor: string) => {
  return {
    backgroundColor: getOpposingColor(bgColor),
  };
};
