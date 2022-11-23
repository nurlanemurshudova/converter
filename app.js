const curInput1 = document.querySelector("#first-input");
const curInput2 = document.querySelector("#second-input");
const leftButtons = document.querySelectorAll(".box1 button");
const rightButtons = document.querySelectorAll(".box2 button");
const p1 = document.querySelector(".online-price")
const p2 = document.querySelector(".online-currency")

const url = "https://api.exchangerate.host/latest?";
let leftCurrency = '';
function changeCurrency(event, whichSide, currency) {
  if (whichSide === "left") {
    leftCurrency = currency;
    [...leftButtons].forEach((button) => {
      button.classList.remove("activeButton");
    });
  }
  if (whichSide === "right") {
    fetch(`${url}base=${leftCurrency}&symbols=${currency}`)
      .then((res) => res.json())
      .then((data) => {
        curInput2.value = data.rates[currency] * curInput1.value;
      });
    [...rightButtons].forEach((button) => {
      button.classList.remove("activeButton");
    });
  }
  event.target.classList.add("activeButton");
}