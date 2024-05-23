type User = {
	name: string;
	age: number;
};

export function makeNameList(arr: User[]) {
	return arr.map((user) => user.name);
}
