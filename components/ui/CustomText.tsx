import clsx from "clsx";
import { useEffect, useState } from "react";

type CustomTextProps = {
  children: string;
  withAnimation?: boolean;
  animationIdx?: number;
  currentIdx?: number;
  nextAnimation?: () => void;
  className?: string;
};

export const CustomText = ({
  children,
  withAnimation,
  animationIdx,
  currentIdx,
  className,
  nextAnimation,
}: CustomTextProps) => {
  const [text, setText] = useState("");
  const [time, setTime] = useState(0);
  const [beepingLine, setBeepingLine] = useState(false);

  const step = 60;
  // random delays for realistic??? typing

  useEffect(() => {
    if (!withAnimation || animationIdx != currentIdx) return;
    const delayList = [100, 200, 10, 300, 50, 120, 3];

    const beepingInterval = setInterval(() => {
      setBeepingLine(!beepingLine);
      console.log(beepingLine);
    }, 100);

    const interval = setInterval(() => {
      if (text.length < children.length) {
        setText((oldText) => `${oldText}${children[oldText.length]}`);
        setTime((oldtime) => oldtime + step);
      } else {
        nextAnimation && nextAnimation();
      }
    }, step);

    return () => {
      clearInterval(interval);
      clearInterval(beepingInterval);
    };
  }, [
    animationIdx,
    beepingLine,
    children,
    currentIdx,
    nextAnimation,
    text.length,
    withAnimation,
  ]);

  if (animationIdx != null && currentIdx != null && currentIdx < animationIdx)
    return null;

  return (
    <h1 className={clsx("text-2xl italic text-black font-bold", className)}>
      {withAnimation && animationIdx === currentIdx ? text : children}
      {withAnimation && animationIdx === currentIdx && <>|</>}
    </h1>
  );
};
