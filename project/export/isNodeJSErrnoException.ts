import type {NodeJSErrnoException} from "./NodeJSErrnoException.ts"
import {isError} from "./isError.ts"

export function isNodeJSErrnoException(value: any): value is NodeJSErrnoException {
	if (!isError(value)) {
		return false
	}

	// todo: could be more strict
	return (
		"errno" in value    ||
		"code" in value     ||
		"path" in value     ||
		"syscall" in value
	)
}
