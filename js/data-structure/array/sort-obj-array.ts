type User = {
	name: string;
	age: number;
};

export function sortByAge(arr: User[]) {
	return arr.sort((current, next) => current.age - next.age);
}
