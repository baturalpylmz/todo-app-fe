import { defineConfig } from 'orval';

export default defineConfig({
    api: {
        input: './swagger.json',
        output: {
            mode: 'tags-split',
            target: './src/api/gen/index.ts',
            client: 'react-query',
            mock: false,
            prettier: true,
            clean: true,
            override: {
                mutator: {
                    path: './src/api/http/http.ts',
                    name: 'httpInstance',
                },
                query: {
                    useQuery: true,
                    useMutation: true,
                    useInfinite: true,
                },
            },
        },
    },
});
