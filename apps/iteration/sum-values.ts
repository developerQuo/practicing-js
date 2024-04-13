export default function sumSalaries(salaries: Record<string, number>): number {
	let sum = 0;
	for (let salary of Object.values(salaries)) {
		sum += salary;
	}
	return sum;
}
