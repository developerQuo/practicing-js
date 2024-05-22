type User = {
	name: string;
	age: number;
	surname: string;
};

export type Users = User[];

export function byField(field: string) {
	return function sort(prevUser: User, nextUser: User) {
		return prevUser[field] > nextUser[field] ? 1 : -1;
	};
}
