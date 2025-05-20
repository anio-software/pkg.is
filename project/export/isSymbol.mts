import {valueToStringType} from "#~src/valueToStringType.mts"

export function isSymbol(value: any): value is symbol {
	return valueToStringType(value) === "[object symbol]"
}
