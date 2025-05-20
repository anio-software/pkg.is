import {valueToStringType} from "#~src/valueToStringType.mts"

export function isUndefined(value: any): value is undefined {
	return valueToStringType(value) === "[object undefined]"
}
