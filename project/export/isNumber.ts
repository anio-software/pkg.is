import {valueToStringType} from "#~src/valueToStringType.ts"

export function isNumber(value: any): value is number|Number {
	return valueToStringType(value) === "[object number]"
}
