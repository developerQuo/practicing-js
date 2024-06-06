type User = {
	name: string;
	surname: string;
	id: number;
};

type UserOutput = {
	fullName: string;
	id: number;
};

export function userMapper(arr: User[]): UserOutput[] {
	return arr.map((user) => ({
		fullName: `${user.name} ${user.surname}`,
		id: user.id,
	}));
}
