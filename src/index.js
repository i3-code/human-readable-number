module.exports = function toReadable (number) {
    let dictionaryOne = {
        1 : 'one',
        2 : 'two',
        3 : 'three',
        4 : 'four',
        5 : 'five',
        6 : 'six',
        7 : 'seven',
        8 : 'eight',
        9 : 'nine',
        10 : 'ten',
        11 : 'eleven',
        12 : 'twelve',
        13 : 'thirteen',
        14 : 'fourteen',
        15 : 'fifteen',
        16 : 'sixteen',
        17 : 'seventeen',
        18 : 'eighteen',
        19 : 'nineteen',
      }

      let dictionaryTwo = {
        2 : 'twenty',
        3 : 'thirty',
        4 : 'forty',
        5 : 'fifty',
        6 : 'sixty',
        7 : 'seventy',
        8 : 'eighty',
        9 : 'ninety',
    }

    let firstNumber = Math.floor(number / 100);
    let firstRest = number % 100
    let secondNumber = Math.floor(firstRest / 10);
    let secondRest = firstRest % 10

    let result = '';
    if (firstNumber > 0) result += dictionaryOne[firstNumber] + ' hundred ';
    if (secondNumber > 1) result += dictionaryTwo[secondNumber] + ' ';
    if (firstRest > 19 && secondRest != 0) { result += dictionaryOne[secondRest]; }
    if (firstRest <= 19 && firstRest != 0) { result += dictionaryOne[firstRest]; }
    return result.trim() || 'zero';
}
