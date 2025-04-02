export const formatNumberWithDecimal = (num: number | string): string => {
  const [number, decimal] = num.toString().split(".");
  return decimal ? `${number}.${decimal.padEnd(2, "0")}` : `${number}.00`;
};
