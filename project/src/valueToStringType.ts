export function valueToStringType(value: any) {
	return Object.prototype.toString.call(value).toLowerCase()
}
