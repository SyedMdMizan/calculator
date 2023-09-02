let input = document.getElementById("input");
let inputbox = document.getElementById("inputvalue");
let buttons = document.querySelectorAll(".button");
let string = "";
let ans = "";
let arr = Array.from(buttons);
arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      ans = eval(string);
      input.value = ans;
      inputbox.value = string;
      string = ans;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
      inputbox.value = string;
    } else if (e.target.innerHTML == "C") {
      string = string.substring(0, string.length - 1);
      input.value = string;
    } else {
      console.log(e.target);
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
