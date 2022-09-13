import { encryptText } from './modules/encrypt.js';

const txtEl = document.querySelector('#plaintext');
const encryptTxtEl = document.querySelector('#encryptedtext');
const shiftEl = document.querySelector('#shift');

txtEl.addEventListener('keyup', () => {
	const shiftValue = Number(shiftEl.value);
	if (shiftValue) {
		const newText = encryptText(txtEl.value, shiftValue);
		encryptTxtEl.innerHTML = newText;
	}
});
