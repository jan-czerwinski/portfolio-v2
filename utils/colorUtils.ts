import clsx from "clsx";

export const getContrastColor = (bgColor: string) => {
  if (!bgColor) return "#000";
  if (bgColor === "#fff" || bgColor === "#000") {
    return bgColor === "#fff" ? "#000" : "#fff";
  }

  // console.log(parseInt(bgColor.replace("#", ""), 16) > 0xffffff / 2);
  return parseInt(bgColor.replace("#", ""), 16) > 0xffffff / 2
    ? "#000"
    : "#fff";
};

export const getBlackWhiteOppostie = (color: string) =>
  clsx(color === "#FFF" ? "text-black" : "text-white");

export const getBgAndTextColorStyle = (bgColor: string) => {
  return {
    backgroundColor: bgColor,
    borderColor: getContrastColor(bgColor),
  };
};
export const getOpposingBgStyle = (bgColor: string) => {
  return {
    backgroundColor: getContrastColor(bgColor),
  };
};
