const colors = [
  ["rgb(207, 222, 243","rgb(224, 234, 252"],
  ["rgba(255, 255, 255","rgba(215, 225, 236"]
];

let colorCount = 1;
function bgChange() {
  const leftColor = colors[0][0];
  const rightColor = colors[0][1];
  colorCount = colorCount == 0.5 ? 1 : parseFloat(colorCount-0.1).toFixed(1);
  document.body.style.background = `linear-gradient(to right, ${leftColor},${colorCount}), ${rightColor},${colorCount}))`;
}
bgChange();
window.setInterval(bgChange, 3000);