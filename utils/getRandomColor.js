const colors = ["red", "green", "blue", "orange", "violet"];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

module.exports = getRandomColor;
