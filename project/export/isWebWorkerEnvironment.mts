// @ts-nocheck

// credit borbulon, taken from https://stackoverflow.com/a/18002694
export async function isWebWorkerEnvironment(): Promise<boolean> {
	if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) {
		return true
	}

	return false
}
