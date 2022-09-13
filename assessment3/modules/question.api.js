const fetchQuestion = async () => {
	// Fetch a question from the https://the-trivia-api.com/api/questions?limit=5 API
	const res = await fetch('https://the-trivia-api.com/api/questions?limit=5 ');
	const data = await res.json();
	const $question = data[0];
	const { question, correctAnswer, incorrectAnswers, category } = $question;

	return { question, correctAnswer, incorrectAnswers, category };
};

export { fetchQuestion };
