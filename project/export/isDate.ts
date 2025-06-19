import {valueToStringType} from "#~src/valueToStringType.ts"

export function isDate(value: any): value is Date {
	return valueToStringType(value) === "[object date]"
}
