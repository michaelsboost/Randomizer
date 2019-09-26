function randomizeTxt() {
  return 0.5 - Math.random();
}

randomize.onclick = function() {
  txt.value = txt.value.split("\n").sort(randomizeTxt).join("\n");
};
