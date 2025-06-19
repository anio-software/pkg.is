import {valueToStringType} from "#~src/valueToStringType.ts"

export function isSymbol(value: any): value is symbol {
	return valueToStringType(value) === "[object symbol]"
}
