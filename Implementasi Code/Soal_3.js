let result = [];

const divieAndSort = (num) => {
  const isNumber = typeof num;

  if (isNumber === 'number') {
    if (num <= Number.MAX_SAFE_INTEGER) {
      const numSplit = num.toString().split('0');
      for (let i = 0; i < numSplit.length; i++) {
        result += numSplit[i]
          .split('')
          .sort((a, b) => a - b)
          .join('');
      }
      return result;
    } else {
      return 'Angka melebihi batas maximum!';
    }
  } else {
    return 'Input harus number!';
  }
};

console.log(divieAndSort(595650015946605));

