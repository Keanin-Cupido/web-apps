'use strict';

// Elements
const dropFromEl = document.getElementById('drop--from');
const dropToEl = document.getElementById('drop--to');
const inputFromEl = document.getElementById('input_conversion--left');
const inputToEl = document.getElementById('input_conversion--right');

let dropFromSelected = dropFromEl.value;
let dropToSelected = dropToEl.value;
let inputFrom = 1;

const currencyAPI_URL = '';

const fetchCurrency = async (inputFrom) => {
    const API = 'https://v6.exchangerate-api.com/v6/4bb58a91c96b8562917189d1/latest/ZAR'
    try {
        const response = await fetch(API, {
            headers: {
                Accept: 'application/json',
            }
        });
        const currencyData = await response.json();

        inputFromEl.value = inputFrom;
        inputToEl.value = Number(inputFromEl.value) * Number(currencyData.conversion_rates[dropToSelected]);

        console.log(inputFromEl.value, inputToEl.value);
    } catch (error) {
        console.log("Error");
    }
}

fetchCurrency();

dropFromEl.addEventListener('change', () => {
    dropFromSelected = dropFromEl.value;
    dropToSelected = dropToEl.value;
    fetchCurrency(inputFrom);
})
dropToEl.addEventListener('change', () => {
    dropFromSelected = dropFromEl.value;
    dropToSelected = dropToEl.value;
    fetchCurrency(inputFrom);
})

inputFromEl.addEventListener('input', (e) => {
    inputFrom = e.target.value;
    fetchCurrency(inputFrom);
})