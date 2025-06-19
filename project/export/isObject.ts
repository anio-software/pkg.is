import {valueToStringType} from "#~src/valueToStringType.ts"

export function isObject(value: any): value is object|Object {
	return valueToStringType(value) === "[object object]"
}
