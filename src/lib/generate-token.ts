/*
Although this method does not guarantee absolute uniqueness, it is sufficient for the requirements of this project.
*/

export const generateToken = () => {
  const randomNum = Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit random number
  const timestamp = Date.now().toString().slice(-2); // Last 2 digits of timestamp
  const token = `${randomNum}${timestamp}`; // Combine random number and timestamp

  // Shuffle the digits of the token
  const shuffledToken = token
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
  return shuffledToken; // 6-digit shuffled token
};
