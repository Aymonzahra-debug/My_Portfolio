function insert(value) {
  document.getElementById("display").value += value;
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function deleteLast() {
  let current = document.getElementById("display").value;
  document.getElementById("display").value = current.slice(0, -1);
}

function calculate() {
  let input = document.getElementById("display").value;
  try {
    let result = eval(input);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error";
  }
}


document.addEventListener("keydown", function (event) {
  const key = event.key;
  const display = document.getElementById("display");

  if ((/\d/).test(key) || "+-*/.%()".includes(key)) {
    display.value += key;
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Backspace") {
    deleteLast();
  } else if (key === "Escape") {
    clearDisplay();
  } else if (key === ".") {
    display.value += ".";
  }
});
