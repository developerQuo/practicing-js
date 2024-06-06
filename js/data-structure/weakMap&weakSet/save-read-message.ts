type Message = { text: string; from: string };
export type MessageArray = Array<Message>;
export type ReadStatus = WeakSet<Message>;

export default function saveReadStatus(): ReadStatus {
	return new WeakSet();
}
