const getRandomNumber = (maxCapOfNumberValue = 100) => {
  const randomNumber = Math.floor(Math.random() * maxCapOfNumberValue);
  return randomNumber;
};

export { getRandomNumber };