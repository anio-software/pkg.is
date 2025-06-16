import {valueToStringType} from "#~src/valueToStringType.mts"

export function isDate(value: any): value is Date {
	return valueToStringType(value) === "[object date]"
}
