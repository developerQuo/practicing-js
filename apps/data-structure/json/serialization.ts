export function serialize(obj: Record<string, unknown>) {
	return JSON.stringify(obj);
}

export function deserialize(jsonObj: string) {
	return JSON.parse(jsonObj);
}
