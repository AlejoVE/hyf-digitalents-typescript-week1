import { fetchQuestion } from './modules/question.api.js';
import { createQuestion } from './modules/question.component.js';

(async () => {
	const question = await fetchQuestion();

	const $question = await createQuestion(question);

	const $app = document.getElementById('app');
	$app.innerHTML = '';
	$app.appendChild($question);
})();
