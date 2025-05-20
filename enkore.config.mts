import {
	createConfig,
	createTargetJSNoneOptions
} from "@anio-software/enkore/spec/factory"

export const config: unknown = createConfig({
	target: {
		name: "js-none",
		options: createTargetJSNoneOptions({
			registry: {
				"npmjs": {
					url: "https://registry.npmjs.org",
					authTokenFilePath: "secrets/npm_auth_token"
				},
				"anioSoftware": {
					url: "https://npm-registry.anio.software",
					authTokenFilePath: "secrets/anio_npm_auth_token",
					clientPrivateKeyFilePath: "secrets/npm_client.pkey",
					clientCertificateFilePath: "secrets/npm_client.cert"
				}
			},

			packageSourceRegistryByScope: {
				"@anio-software": {
					registry: "anioSoftware"
				}
			},

			publish: [{
				registry: "anioSoftware"
			}, {
				registry: "npmjs",
				publishWithProvenance: true
			}]
		})
	}
})
