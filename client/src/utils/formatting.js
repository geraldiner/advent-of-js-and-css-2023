const formatTitleCase = (str) => {
	const words = str.split('-');
	return words.reduce((newStr, word, index) => {
		if (index === 0) {
			return word[0].toUpperCase() + word.slice(1).toLowerCase();
		} else {
			return newStr + ' ' + word[0].toUpperCase() + word.slice(1).toLowerCase();
		}
	}, '');
};

export {formatTitleCase};
