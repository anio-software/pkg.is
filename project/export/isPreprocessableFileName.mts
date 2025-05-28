const extensions = [
	// typescript-like
	".ts", ".cts", ".mts", ".tsx",
	// javascript-like
	".js", ".cjs", ".mjs", ".jsx",
	// html-like
	".html", ".htm", ".svg", ".php",
	// css-like
	".css", ".styl", ".sass", ".scss",
	// c-like
	".c", ".cpp", ".h", ".hpp",
	// config
	".json", ".yaml", ".yml", ".ini",
	// misc
	".md", ".txt"
]

export function isPreprocessableFileName(fileName: string): boolean {
	for (const extension of extensions) {
		if (fileName.endsWith(extension)) {
			return true
		}
	}

	return false
}
