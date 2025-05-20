export async function isNodeEnvironment(): Promise<boolean> {
	try {
		// @ts-ignore:next-line
		let os = require("node:os")

		return !!os
	} catch {}

	try {
		// @ts-ignore:next-line
		let os = await import("node:os")

		return !!os
	} catch {}

	return false
}
