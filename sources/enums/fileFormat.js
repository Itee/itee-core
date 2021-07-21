/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 */

import { toEnum } from 'itee-utils'

/**
 * @typedef {Enum} FileFormat
 * @property {String} Asc="asc" - The ascii file format
 * @property {String} Dae="dae" - The dae file format
 * @property {String} Dbf="dbf" - The dbf file format
 * @property {String} Fbx="fbx" - The fbx file format
 * @property {String} Mtl="mtl" - The material file format
 * @property {String} Json="json" - The json file format
 * @property {String} Obj="obj" - The object file format
 * @property {String} Shp="shp" - The shape file format
 * @property {String} Stl="stl" - The stereolithographie file format
 *
 * @constant
 * @type {FileFormat}
 * @description The FileFormat Enum give some commonly used file format in 3d context
 */
const FileFormat = toEnum( {
    Asc:  { value: 'asc' },
    Dae:  { value: 'dae' },
    Dbf:  { value: 'dbf' },
    Fbx:  { value: 'fbx' },
    Mtl:  { value: 'mtl' },
    Json: { value: 'json' },
    Obj:  { value: 'obj' },
    Shp:  { value: 'shp' },
    Stl:  { value: 'stl' }
} )

export { FileFormat }
