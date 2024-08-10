export class HashTable {
	#keyMap: [string, string][][];

	constructor(size = 53) {
		this.#keyMap = new Array(size);
	}

	_hash(key: string) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
			let char = key[i];
			let value = char.charCodeAt(0) - 96;
			total = (total * WEIRD_PRIME + value) % this.#keyMap.length;
		}
		return total;
	}

	get(key: string) {
		// key를 해싱한다.
		const entries = this.#keyMap[this._hash(key)];

		// 해싱된 키로 테이블에서 값을 찾는다.
		const entry = entries?.find((entry) => entry[0] === key);
		// 만약 없다면 undefined를 리턴한다.
		return entry ? entry[1] : undefined;
	}

	set(key: string, value: string) {
		const place = this.#keyMap[this._hash(key)];
		// key를 해싱한다.
		// key, value 페어를 해싱한 위치에 저장한다.
		place
			? place.push([key, value])
			: (this.#keyMap[this._hash(key)] = [[key, value]]);
	}

	keys() {
		return this.#keyMap.flat().map(([key]) => key);
	}

	values() {
		const values = this.#keyMap.flat().map(([, value]) => value);
		return new Array(...new Set(values));
	}
}
