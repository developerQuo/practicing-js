export default function aclean(words: Array<string>) {
	const wordsMap = new Map();

	for (let word of words) {
		wordsMap.set(nomarlize(word), word);
	}

	return Array.from(wordsMap.values());
}

export function nomarlize(word: string) {
	return word.split('').sort().join('').toLowerCase();
}

// NOTE: Set 기반에서 Map 기반으로 로직 개선
