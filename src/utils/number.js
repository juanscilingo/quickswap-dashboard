import BigNumber from "bignumber.js";

export const convertTokenDecimals = (value, token) => {
  const number = value._isBigNumber ? BigNumber(value._hex) : BigNumber(value);
  return number.times(Math.pow(10, -1 * token.decimals)).toNumber();
}