var txt = document.querySelector("[data-action=input-list]");

if ( localStorage.getItem("randomize")) {
  txt.value = localStorage.getItem("randomize");
}

document.querySelector("[data-action=randomize]").onclick = function() {
  txt.value = (txt.value.split("\n").sort(randomize).join("\n"));

  function randomize() {
    return 0.5 - Math.random();
  }
  localStorage.setItem("randomize", txt.value);
}
