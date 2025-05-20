// credit borbulon, taken from https://stackoverflow.com/a/18002694
export async function isWebWorkerEnvironment(): Promise<boolean> {
	// @ts-ignore:next-line
	if (typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope) {
		return true
	}

	return false
}
