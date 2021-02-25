const number = (v, { decimalPlaces, prefix = '', suffix = '' } = {}) => {
  if (decimalPlaces === undefined || decimalPlaces === null)
    decimalPlaces = Math.abs(v) >= 1 || v === 0 ? 2 : 6;

  let decimalMultiplier = Math.pow(10, decimalPlaces);
  const n = Math.round(v * decimalMultiplier) / decimalMultiplier;
  return `${prefix}${n}${suffix ? ` ${suffix}` : ''}` ;
} 

const usd = (v, extra) => `$${number(v, extra)}`;
const symbol = (v, s, extra) => number(v, { suffix: s, ...extra });
const percentage = (v, extra) => `${number(v * 100, extra)}%`;
const trimmedAddress = v => `${v.slice(0, 6)}...${v.slice(-4)}`;

const formatter = {
  number,
  usd,
  symbol,
  percentage,
  trimmedAddress,
}

export default formatter;