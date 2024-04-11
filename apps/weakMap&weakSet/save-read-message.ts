export type Message = { text: string; from: string };
export type ReadStatus = WeakSet<Message>;

export default function saveReadStatus(message: Message): ReadStatus {
	return new WeakSet();
}
