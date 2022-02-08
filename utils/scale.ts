type range = {
  min: number;
  max: number;
};

export default function scale(number: number, inRange: range, outRange: range) {
  return (
    ((number - inRange.min) * (outRange.max - outRange.min)) /
      (inRange.max - inRange.min) +
    outRange.min
  );
}
