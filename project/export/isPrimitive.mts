export function isPrimitive(value: any): value is string|boolean|number|bigint|symbol {
	if (typeof value === "string") {
		return true
	} else if (typeof value === "boolean") {
		return true
	} else if (typeof value === "number") {
		return true
	} else if (typeof value === "bigint") {
		return true
	} else if (typeof value === "symbol") {
		return true
	}

	return false
}
