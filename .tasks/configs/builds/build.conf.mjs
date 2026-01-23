import { createRollupConfigs } from '@itee/tasks/sources/utils/builds.mjs'

export default createRollupConfigs( {
    externalMap: {
        'esm':  [
            '@itee/validators',
            '@itee/utils',
        ],
        'cjs':  [
            '@itee/validators',
            '@itee/utils',
        ],
        'iife': [
            '@itee/validators',
            '@itee/utils',
        ],
    }
} )
