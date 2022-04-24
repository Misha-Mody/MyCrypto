/**
 *
 * @param {*} num The number that needs to be transoformed in term of million , billion, etc
 * @param {*} digits The value to round of till
 * @returns A string of the formatted number
 */
export function numberToString(num, digits = 2) {
  const lookup = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "Thousand" },
    { value: 1e6, symbol: "Million" },
    { value: 1e9, symbol: "Billion" },
    { value: 1e12, symbol: "Trillion" },
    { value: 1e15, symbol: "Quadrillion" },
    { value: 1e18, symbol: "Quintillion" },
  ];
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  var item = lookup
    .slice()
    .reverse()
    .find(function (item) {
      return num >= item.value;
    });
  return item
    ? (num / item.value).toFixed(digits).replace(rx, "$1") + " " + item.symbol
    : "0";
}
