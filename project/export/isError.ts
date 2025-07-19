export function isError(value: any): value is Error {
	try {
		// @ts-ignore:next-line
		return Error.isError(value)
	} catch {}

	return value instanceof Error
}
