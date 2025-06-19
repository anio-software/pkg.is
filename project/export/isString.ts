import {valueToStringType} from "#~src/valueToStringType.ts"

export function isString(value: any): value is string|String {
	return valueToStringType(value) === "[object string]"
}
