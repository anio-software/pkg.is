import {valueToStringType} from "#~src/valueToStringType.ts"

export function isArray(value: any): value is Array<unknown> {
	return valueToStringType(value) === "[object array]"
}
