type Salaries = Record<string, any>;

export default function topSalary(salaries: Salaries) {
	const salariesEntries = Object.entries(salaries);

	if (salariesEntries.length === 0) return null;

	const [topEarner] = salariesEntries.sort((prev, next) => next[1] - prev[1]);
	const [name] = topEarner;
	return name;
}
