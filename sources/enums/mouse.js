/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 */

import { toEnum } from 'itee-utils'

/**
 * @typedef {Enum} Mouse
 * @property {Number} Wheel=-1 - The enter key code
 * @property {Number} Left=0 - The enter key code
 * @property {Number} Middle=1 - The enter key code
 * @property {Number} Right=2 - The enter key code
 *
 * @constant
 * @type {Mouse}
 * @description This Mouse Enum expose 4 common state of mouse button values (Wheel, Left, Middle and Right), this allow to write semantic code instead of integer when dealing with mouse button codes.
 */
const Mouse = toEnum( {
    Wheel:  { value: -1 },
    Left:   { value: 0 },
    Middle: { value: 1 },
    Right:  { value: 2 }
} )

export { Mouse }
