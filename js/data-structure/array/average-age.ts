type User = {
	name: string;
	age: number;
};

export function getAverageAge(arr: User[]) {
	return arr.reduce((average, current, index, array) => {
		average += current.age / array.length;
		return average;
	}, 0);
}
