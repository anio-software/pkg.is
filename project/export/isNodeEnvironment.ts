export async function isNodeEnvironment(): Promise<boolean> {
	try {
		let os = require("node:os")

		return !!os
	} catch {}

	try {
		let os = await import("node:os")

		return !!os
	} catch {}

	return false
}
