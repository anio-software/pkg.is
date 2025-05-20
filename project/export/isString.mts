import {valueToStringType} from "#~src/valueToStringType.mts"

export function isString(value: any): value is string|String {
	return valueToStringType(value) === "[object string]"
}
