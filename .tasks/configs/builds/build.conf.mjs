import { createRollupConfigs } from '@itee/tasks/sources/utils/builds.mjs'

export default createRollupConfigs( {
    externalMap: {
        'esm':  [
            'itee-validators',
            'itee-utils',
            'three',
            'crypto'
        ],
        'cjs':  [
            'itee-validators',
            'itee-utils',
            'three',
            'crypto'
        ],
        'iife': [
            'itee-validators',
            'itee-utils',
            'three'
        ],
    }
} )
