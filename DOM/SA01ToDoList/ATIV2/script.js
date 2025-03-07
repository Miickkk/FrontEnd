document.getElementById("mudarCor").addEventListener

("click", function mudarCor() {
  let cores = ["red", "blue", "green", "purple", "orange"];
  document.body.style.backgroundColor =
    cores[Math.floor(Math.random() * cores.length)];
});
