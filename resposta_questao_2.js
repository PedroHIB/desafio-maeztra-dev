var input = [4, 5, 44, 98, 4, 5, 6, 7];

const checkOrderNumber = (arr) => {
  const filteredArray = arr.filter((ant, pos) => {
    return arr.indexOf(ant) !== pos;
  });

  return filteredArray;
};

console.log("Output", checkOrderNumber(input));
