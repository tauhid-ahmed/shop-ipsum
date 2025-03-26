export const mapRangeValue = (
  value: number,
  oldMin: number,
  oldMax: number,
  newMin: number,
  newMax: number
) => ((value - oldMin) * (newMax - newMin)) / (oldMax - oldMin) + newMin;
