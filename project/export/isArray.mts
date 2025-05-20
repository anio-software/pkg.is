import {valueToStringType} from "#~src/valueToStringType.mts"

export function isArray(value: any): value is Array<unknown> {
	return valueToStringType(value) === "[object array]"
}
