import {valueToStringType} from "#~src/valueToStringType.ts"

export function isUndefined(value: any): value is undefined {
	return valueToStringType(value) === "[object undefined]"
}
