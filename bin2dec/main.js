'use strict';

const convertBtn = document.getElementById('convertBtn');
const binaryInput = document.getElementById('binaryInput');
const decimalOutput = document.getElementById('outputMessage');
let binary = 0;
let decimal = 0;

convertBtn.addEventListener('click', () => {
	binary = Number(binaryInput.value);

	if (!isValueBinary(binary)) {
		showAlert('Enter only a binary number!', 'danger');
		return;
	}

	decimal = convertBinToDec(binary);

	if (decimal === '-1') {
		showAlert('Conversion failed!', 'danger');
	} else {
		showAlert('Conversion successful!', 'success');
	}

	// Output
	decimalOutput.textContent = decimal;
});

function convertBinToDec(binary) {
	let isDecimal = isValueDecimal(decimal) ? true : false;

	if (isDecimal) {
		let decimalValue = 0;
		let binaryString = binary.toString();
		for (let i = 0; i < binaryString.length; i++) {
			decimalValue = decimalValue * 2 + parseInt(binaryString[i], 10);
		}
		return decimalValue;
	} else {
		return '-1';
	}
}

// ==== Error checking ===
// Check if the input is binary
function isValueBinary(binary) {
	const binaryString = binary.toString();
	for (let i = 0; i < binaryString.length; i++) {
		if (binaryString[i] !== '0' && binaryString[i] !== '1') {
			return false;
		}
	}
	return true;
}

// Check if the output is decimal
function isValueDecimal(decimal) {
	return !isNaN(decimal) && Number.isInteger(decimal);
}

// Bootstrap Toast alert with smooth fade animation
function showAlert(message, type) {
	const alertPlaceholder = document.querySelector('.errors_container');
	alertPlaceholder.innerHTML = `
		<div class="alert alert-${type} fade show" role="alert">
			<b>${type === 'danger' ? 'Error' : 'Success'}:</b> ${message}
		</div>
	`;

	setTimeout(() => {
		const alertElement = alertPlaceholder.querySelector('.alert');
		alertElement.classList.remove('show');
		alertElement.classList.add('fade');
		setTimeout(() => {
			alertPlaceholder.innerHTML = '';
		}, 500); // Wait for the fade-out transition to complete
	}, 2000);
}
