type Props = Record<string, any>;

export default function destructuringAssignment({ name, years }: Props) {
	return {
		name,
		age: years,
		isAdmin: false,
	};
}
