import {valueToStringType} from "#~src/valueToStringType.mts"

export function isFunction(value: any): value is Function {
	return valueToStringType(value) === "[object function]"
}
