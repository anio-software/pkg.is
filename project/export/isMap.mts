import {valueToStringType} from "#~src/valueToStringType.mts"

export function isMap(value: any): value is Map<unknown, unknown> {
	return valueToStringType(value) === "[object map]"
}
