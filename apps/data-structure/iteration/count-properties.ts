export default function count(salaries: Record<string, number>): number {
	return Object.keys(salaries).length;
}
