/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 */

import { toEnum } from 'itee-utils'

/**
 * @typedef {Enum} ResponseType
 * @property {String} ArrayBuffer="arraybuffer" - The "arraybuffer" server response type.
 * @property {String} Blob="blob" - The "blob" server response type.
 * @property {String} Document="document" - The "document" server response type.
 * @property {String} Json="json" - The "json" server response type.
 * @property {String} DOMString="text" - The "text" server response type.
 * @property {String} Default="text" - The "" server response type ( equivalent to DOMString ).
 *
 * @constant
 * @type {ResponseType}
 * @description ResponseType allow to filter wich type of response is recieved from the server.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/responseType} for further information.
 */
const ResponseType = /*#__PURE__*/toEnum( {
    ArrayBuffer: { value: 'arraybuffer' },
    Blob:        { value: 'blob' },
    Document:    { value: 'document' },
    Json:        { value: 'json' },
    DOMString:   { value: 'text' },
    Default:     { value: '' }
} )

export { ResponseType }
