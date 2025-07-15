import {valueToStringType} from "#~src/valueToStringType.ts"

export function isArray<T = unknown>(value: any): value is Array<T> {
	return valueToStringType(value) === "[object array]"
}
