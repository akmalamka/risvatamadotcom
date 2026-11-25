const API_VERSION = '2024-03-15'
const API_VERSION_PATTERN = /^\d{4}-\d{2}-\d{2}$/

export default defineNuxtPlugin({
  name: 'sanity-api-version',
  enforce: 'pre',
  setup() {
    const config = useRuntimeConfig()
    const version = config.public.sanity?.apiVersion

    if (version === '1' || (typeof version === 'string' && API_VERSION_PATTERN.test(version))) {
      return
    }

    config.public.sanity.apiVersion = API_VERSION
  },
})
