const weekDayMap = {
	0: 'SU',
	1: 'MO',
	2: 'TU',
	3: 'WE',
	4: 'TH',
	5: 'FR',
	6: 'SA',
};

function getWeekDay(date: Date) {
	return weekDayMap[date.getDay()];
}

export default getWeekDay;
