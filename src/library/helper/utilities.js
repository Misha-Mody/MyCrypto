/**
 *
 * @param {*} num The number that needs to be transoformed in term of million , billion, etc
 * @param {*} digits The value to round of till
 * @returns A string of the formatted number ( 1000000 -> 1 million)
 */
function numberToValueString(num, digits = 2) {
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

/**
 *
 * @param {*} n the number that you want to round
 * @param {*} digits  till how many digits do you want to round it
 * @returns number rounded to desired digits
 */
function roundNumberTo(n, digits) {
  if (digits === undefined) {
    digits = 0;
  }

  var multiplicator = Math.pow(10, digits);
  n = parseFloat((n * multiplicator).toFixed(11));
  return Math.round(n) / multiplicator;
}

/**
 * Display a red color for negative percentages or numbers and green color for positive
 * @param {*} num Number or String  who's color we want to determine
 * @returns
 */
function getNumberColor(num) {
  if (typeof num === "string" || num instanceof String) {
    if (num.slice(0, 1) == "-") {
      return "text-danger";
    } else {
      return "text-success";
    }
  } else {
    return num > 0 ? "text-success" : "text-danger";
  }
}

export { numberToValueString, roundNumberTo, getNumberColor };
