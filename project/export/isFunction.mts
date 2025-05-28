import {valueToStringType} from "#~src/valueToStringType.mts"

export function isFunction(value: any): value is Function {
	const type = valueToStringType(value)

	if (type === "[object function]") {
		return true
	} else if (type === "[object asyncfunction]") {
		return true
	}

	return false
}
