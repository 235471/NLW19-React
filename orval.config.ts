import { defineConfig } from 'orval'

export default defineConfig({
  api: {
    input: 'https://nlw19-nodejs.onrender.com/api-docs/json',
    output: {
      target: './src/http/api.ts',
      client: 'fetch',
      httpClient: 'fetch',
      clean: true,
      baseUrl: 'https://nlw19-nodejs.onrender.com',

      override: {
        fetch: {
          includeHttpResponseReturnType: false,
        },
      },
    },
  },
})
