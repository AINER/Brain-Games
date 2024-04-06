const getRandomNumberWithMaxCap = (max = 100) => {
  const randomNumber = Math.floor(Math.random() * max);
  return randomNumber;
};

const getRandomNumberWithGivenRange = (max, min) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + min);
  return randomNumber;
};

export { getRandomNumberWithMaxCap, getRandomNumberWithGivenRange };
