export default function aclean(words: Array<string>) {
	const uniqueWords = new Array(
		...new Set(words.map((word) => ascNomarlize(word)))
	);
	return uniqueWords.map((cur) => {
		for (let word of words) {
			if (cur === ascNomarlize(word)) {
				return word;
			}
		}
		return cur;
	});
}

export function ascNomarlize(word: string) {
	return word.split('').sort().join('').toLowerCase();
}

//TODO: map, set 기능을 이용해서 풀어보기
