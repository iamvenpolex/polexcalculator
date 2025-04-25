let display = document.getElementById('display');

function append(value) {
    display.value += value;
  }

  function clearDisplay() {
    display.value = '';
  }

  function deleteLast() {
    display.value = display.value.slice(0, -1);
  }

  function calculate() {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = 'Error';
    }
  }

  

  const hour = new Date().getHours(); 
let greeting;
if (hour < 16) {
  greeting = "Good day!";
} else {
  greeting = "Good evening!";
}

document.getElementById("demo").innerHTML = greeting;

 