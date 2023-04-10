const formElement = document.querySelector(".js-form");
const currencyToElement = document.querySelector(".js-currencyTo");
const currencyFromElement = document.querySelector(".js-currencyFrom");
const resultElement = document.querySelector(".js-result");
const exchangeRateElement = document.querySelector(".js-exchangeRate");

const ratePLN = 1.00;
const rateUSD = 4.3981;
const rateEUR = 4.6871;
const rateGBP = 5.2836;
const rateCHF = 4.7156;
const rateAUD = 2.9292;

const submitForm = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const amount = Number(amountElement.value);
    const currencyTo = currencyToElement.value;
    const currencyFrom = currencyFromElement.value;

    let result;

    switch (currencyFrom) {
        case "USD":
            part = amount * rateUSD;
            break;

        case "EUR":
            part = amount * rateEUR;
            break;

        case "GBP":
            part = amount * rateGBP;
            break;

        case "CHF":
            part = amount * rateCHF;
            break;

        case "AUD":
            part = amount * rateAUD;
            break;

            case "PLN":
            part = amount * ratePLN;
            break;
    }

    switch (currencyTo) {
        case "USD":
            result = part / rateUSD;
            break;

        case "EUR":
            result = part / rateEUR;
            break;

        case "GBP":
            result = part / rateGBP;
            break;

        case "CHF":
            result = part / rateCHF;
            break;

        case "AUD":
            result = part / rateAUD;
            break;

            case "PLN":
            result = part / ratePLN;
            break;
    }
   
    resultElement.innerHTML = `${amount.toFixed(2)} ${currencyFrom} = <strong>${result.toFixed(2)} ${currencyTo}</strong>`;
};

formElement.addEventListener("submit", submitForm);

formElement.addEventListener("input", () => {
    const currencyTo = currencyToElement.value;
    const currencyFrom = currencyFromElement.value;

    switch (currencyFrom) {
        case "USD":
            rate = rateUSD;
            break;
        case "EUR":
            rate = rateEUR;
            break;
        case "GBP":
            rate = rateGBP;
            break;
        case "CHF":
            rate = rateCHF;
            break;
        case "AUD":
            rate = rateAUD;
            break;
            case "PLN":
            rate = ratePLN;
            break;
    }

    switch (currencyTo) {
        case "USD":
            result = rate / rateUSD;
            break;
        case "EUR":
            result = rate / rateEUR;
            break;
        case "GBP":
            result = rate / rateGBP;
            break;
        case "CHF":
            result = rate / rateCHF;
            break;
        case "AUD":
            result = rate / rateAUD;
            break;
            case "PLN":
            result = rate / ratePLN;
            break;
    }

    if (currencyFrom === currencyTo) {
        exchangeRateElement.innerHTML = `1 ${currencyFrom} = ${result.toFixed(0)} ${currencyTo}`;
    } else if (currencyFrom !== currencyTo) {
    exchangeRateElement.innerHTML = `1 ${currencyFrom} = ${result.toFixed(4)} ${currencyTo}`;
    }
});

formElement.addEventListener ("reset", (event) => {
resultElement.innerText = "";
exchangeRateElement.innerText = "";

});