import { encryptText } from './modules/encrypt.js';

const txtEl = document.querySelector('#plaintext');
const encrypTxtEl = document.querySelector('#encryptedtext');
const shiftEl = document.querySelector('#shift');

txtEl.addEventListener('keyup', () => {
	const number = Number(shiftEl.value);
	if (number) {
		const newText = encryptText(txtEl.value, number);
		encrypTxtEl.innerHTML = newText;
	}
});
