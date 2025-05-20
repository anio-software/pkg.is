import {valueToStringType} from "#~src/valueToStringType.mts"

export function isNumber(value: any): value is number|Number {
	return valueToStringType(value) === "[object number]"
}
