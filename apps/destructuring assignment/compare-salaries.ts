type Salaries = Record<string, any>;

export default function topSalary(salaries: Salaries) {
	return Object.entries(salaries).sort((prev, next) => next[1] - prev[1])[0][0];
}
