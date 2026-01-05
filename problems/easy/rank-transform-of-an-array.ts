function arrayRankTransform(arr: number[]): number[] {
  const sortedArray = [...arr].sort((a, b) => a - b);
  const rank = [];
  const clean = [];

  for (let i = 0; i < sortedArray.length; i++) {
    if (sortedArray[i] !== sortedArray[i + 1]) {
      clean.push(sortedArray[i]);
    }
  }

  for (const number of arr) {
    rank.push(clean.indexOf(number) + 1);
  }

  return rank;
}

console.log(" ===> ", arrayRankTransform([37, 12, 28, 9, 100, 56, 80, 5, 12]));
