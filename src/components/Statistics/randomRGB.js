const randomRGB = () => {
  const r = Math.round(255 * Math.random(0.05, 0.95)).toString(16);
  const g = Math.round(255 * Math.random(0.05, 0.95)).toString(16);
  const b = Math.round(255 * Math.random(0.05, 0.95)).toString(16);
  return `#${r + g + b}`;
};

export default randomRGB;
