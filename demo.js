/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  const countAndSayHelper = (n) => {
    if (n === 1) {
      return "1";
    }

    const data = countAndSayHelper(n - 1);
    const descFn = (data) => {
      let i = 0;
      let j = 1;
      let str = "";
      while (i < data.length) {
        if (data[i] === data[j]) {
          j++;
        } else {
          str = str + (j - i) + data[i];
          i = j;
          j++;
        }
      }
      return str;
    };

    return descFn(data);
  };

  return countAndSayHelper(n);
};

console.log(countAndSay(7));
