export async function isWebEnvironment(): Promise<boolean> {
	// @ts-expect-error
	if (typeof window === "object") {
		return true
	}

	return false
}
