export type Message = { text: string; from: string };

export default function saveReadLog(message: Message): WeakMap<Message, Date> {
	return new WeakMap();
}
