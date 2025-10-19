/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 */

import { toEnum } from 'itee-utils'

/**
 * @typedef {Enum} HttpVerb
 * @property {String} Create="PUT" - Corresponding to the create http verb for an itee server, namely "PUT".
 * @property {String} Read="POST" - Corresponding to the read http verb for an itee server, namely "POST".
 * @property {String} Update="PATCH" - Corresponding to the update http verb for an itee server, namely "PATCH".
 * @property {String} Delete="DELETE" - Corresponding to the delete http verb for an itee server, namely "DELETE".
 *
 * @constant
 * @type {HttpVerb}
 * @description HttpVerb contains the CRUD actions with corresponding http verb to request an itee server.
 * @see {@link https://en.wikipedia.org/wiki/Create,_read,_update_and_delete} for further information.
 */
const HttpVerb = /*#__PURE__*/toEnum( {
    Create: { value: 'PUT' },
    Read:   { value: 'POST' },
    Update: { value: 'PATCH' },
    Delete: { value: 'DELETE' }
} )

export { HttpVerb }
