module.exports = function toReadable(number) {
  const units = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const afterTen = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const dozens = [
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const upToAThousand = (num) => {
    if (String(num).length === 1) {
      return units[num];
    }
    if (String(num).length === 2 && String(num).slice(0, 1) === '1') {
      return afterTen[String(num).slice(1)];
    }
    if (String(num).length === 2 && String(num).slice(1) === '0') {
      return `${dozens[String(num).slice(0, 1) - 2]}`;
    }
    if (String(num).length === 2 && String(num).slice(1) !== '0') {
      return `${dozens[String(num).slice(0, 1) - 2]} ${units[String(num).slice(1)]}`;
    }
    return true;
  };

  const forHundreds = (num) => {
    if (String(num).slice(1) === '00') {
      return `${units[String(num).slice(0, 1)]} hundred`;
    }
    if (String(num).slice(1, 2) === '0') {
      return `${units[String(num).slice(0, 1)]} hundred ${units[String(num).slice(2)]}`;
    }
    return `${units[String(num).slice(0, 1)]} hundred ${upToAThousand(String(num).slice(1))}`;
  };

  return String(number).length < 3
    ? upToAThousand(number)
    : forHundreds(number);
};
