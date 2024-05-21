export default function sum(prevNum: number) {
	return function (nextNum: number) {
		return prevNum + nextNum;
	};
}
