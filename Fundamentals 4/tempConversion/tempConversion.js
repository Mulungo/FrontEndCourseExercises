const ftoc = function (temp) {
  if (temp === 32) {
    return 0;
  } else {
    let tempInCelsius = (temp - 32) * 5 / 9;
    let roundedTemp = Number.parseFloat(tempInCelsius.toFixed(1));
    return roundedTemp;
  }
}

const ctof = function (temp) {
  if (temp === 0) {
    return 32;
  } else {
    let tempInFahrenheit = temp * 9 / 5 + 32;
    let roundedTemp = Number.parseFloat(tempInFahrenheit.toFixed(1));
    return roundedTemp;
  }
}

module.exports = {
  ftoc,
  ctof
}
