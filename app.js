const leftButtons = document.querySelector('.box1 button')
const rightButtons = document.querySelector('.box2 button')
const btn = document.querySelectorAll('box button');
const url = 'https://api.exchangerate.host';
let leftSideBaseCurrency = ''
function changeCurrency(event, whichSide, currrency) {
    if (whichSide === 'left') {
        leftSideBaseCurrency = currrency;
        [...leftButtons].forEach((button) => {
            button.classList.remove('activeButton')
        })
    }
    if (whichSide === 'right') {
        fetch(`${url}base=${leftSideBaseCurrency}&symbols=${currrency}`)
            .then((res) => res.json())
            .then((data) => {
                const v1 = curInput1.value;
                curInput2.value=v1*data.rates[currrency];
            })
        [...rightButtons].forEach((button) => {
            button.classList.remove('activeButton')
        })
    }
    event.target.style.backgroundColor = '#833AE0';
    event.target.style.color = 'white';
    event.target.classList.add('activeButton');


}












