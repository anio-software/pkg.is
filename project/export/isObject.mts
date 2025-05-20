import {valueToStringType} from "#~src/valueToStringType.mts"

export function isObject(value: any): value is object|Object {
	return valueToStringType(value) === "[object object]"
}
