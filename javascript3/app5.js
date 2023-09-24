
function getRandomNumber(min, max) {
    if (min >= max) {
      return "Invalid input: Minimum value must be less than the maximum value.";
    }
    const randomNumber = Math.random() * (max - min) + min;
    return randomNumber;
  }