import {valueToStringType} from "#~src/valueToStringType.ts"

export function isBoolean(value: any): value is boolean|Boolean {
	return valueToStringType(value) === "[object boolean]"
}
