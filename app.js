const curInput1 = document.querySelector("#first-input");
const curInput2 = document.querySelector("#second-input");
const leftButtons = document.querySelectorAll(".box1 button");
const rightButtons = document.querySelectorAll(".box2 button");

const url = "https://api.exchangerate.host/latest?";
let leftSideBaseCurrency = "";

function changeCurrency(event, whichSide, currency) {
  if (whichSide === "left") {
    leftSideBaseCurrency = currency;
    [...leftButtons].forEach((button) => {
      button.classList.remove("activeButton");
    });
  }
  if (whichSide === "right") {
    fetch(`${url}base=${leftSideBaseCurrency}&symbols=${currency}`)
      .then((res) => res.json())
      .then((data) => {
        if(currency=='USD'){
        curInput2.value = data.rates.USD * curInput1.value;
        console.log(data,data.rates.USD)
        }
        else if(currency=='RUB'){
            curInput2.value = data.rates.RUB * curInput1.value;
            console.log(data,data.rates.RUB)
        }
        else if(currency=='EUR'){
            curInput2.value = data.rates.EUR * curInput1.value;
            console.log(data,data.rates.EUR)
        }
        else if(currency=='GBP'){
            curInput2.value = data.rates.GBP * curInput1.value;
            console.log(data,data.rates.GBP)
        }
      });
    [...rightButtons].forEach((button) => {
      button.classList.remove("activeButton");
    });
  }
  event.target.classList.add("activeButton");
}
