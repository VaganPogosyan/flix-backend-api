const colors = ["red", "green", "blue", "yellow", "orange", "purple"];

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

module.exports = getRandomColor;
