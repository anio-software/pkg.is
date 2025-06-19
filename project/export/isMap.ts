import {valueToStringType} from "#~src/valueToStringType.ts"

export function isMap(value: any): value is Map<unknown, unknown> {
	return valueToStringType(value) === "[object map]"
}
