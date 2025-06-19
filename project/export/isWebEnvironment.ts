export async function isWebEnvironment(): Promise<boolean> {
	if (typeof window === "object") {
		return true
	}

	return false
}
