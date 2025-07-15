import {valueToStringType} from "#~src/valueToStringType.ts"

export function isMap<K = unknown, V = unknown>(value: any): value is Map<K, V> {
	return valueToStringType(value) === "[object map]"
}
