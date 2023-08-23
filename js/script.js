{
  const currencyToElement = document.querySelector(".js-currencyTo");
  const currencyFromElement = document.querySelector(".js-currencyFrom");
  const resultElement = document.querySelector(".js-result");
  const exchangeRateElement = document.querySelector(".js-exchangeRate");

  const ratePLN = 1.0;
  const rateUSD = 4.3981;
  const rateEUR = 4.6871;
  const rateGBP = 5.2836;
  const rateCHF = 4.7156;
  const rateAUD = 2.9292;

  const calculateResult = (amount, currencyFrom, currencyTo) => {
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
        return part / rateUSD;

      case "EUR":
        return part / rateEUR;

      case "GBP":
        return part / rateGBP;

      case "CHF":
        return part / rateCHF;

      case "AUD":
        return part / rateAUD;

      case "PLN":
        return part / ratePLN;
    }
  };

  const resultText = (amount, currencyFrom, currencyTo, result) => {
    resultElement.innerHTML = `${amount.toFixed(
      2
    )} ${currencyFrom} = <strong>${result.toFixed(2)} ${currencyTo}</strong>`;
  };

  const submitForm = (event) => {
    event.preventDefault();

    const amountElement = document.querySelector(".js-amount");
    const amount = Number(amountElement.value);
    const currencyTo = currencyToElement.value;
    const currencyFrom = currencyFromElement.value;
    const result = calculateResult(amount, currencyFrom, currencyTo);
    resultText(amount, currencyFrom, currencyTo, result);
    amountElement.value = "";
    amountElement.focus();
  };

  const calculateCurrencyRate = (currencyFrom, currencyTo) => {
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
        return rate / rateUSD;

      case "EUR":
        return rate / rateEUR;

      case "GBP":
        return rate / rateGBP;

      case "CHF":
        return rate / rateCHF;

      case "AUD":
        return rate / rateAUD;

      case "PLN":
        return rate / ratePLN;
    }
  };

  const currencyRateText = (currencyFrom, currencyTo, result) => {
    exchangeRateElement.innerHTML = `1 ${currencyFrom} = ${result.toFixed(
      currencyFrom === currencyTo ? 0 : 4
    )} ${currencyTo}`;
  };

  const currencyInput = () => {
    const currencyTo = currencyToElement.value;
    const currencyFrom = currencyFromElement.value;

    const result = calculateCurrencyRate(currencyFrom, currencyTo);
    currencyRateText(currencyFrom, currencyTo, result);
  };

  const resetForm = (event) => {
    resultElement.innerText = "";
    exchangeRateElement.innerText = "";
  };

  const init = () => {
    const formElement = document.querySelector(".js-form");

    formElement.addEventListener("submit", submitForm);
    formElement.addEventListener("input", currencyInput);
    formElement.addEventListener("reset", resetForm);
  };

  init();
}
