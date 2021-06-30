/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 */

import {
    isNull,
    isUndefined
} from 'itee-validators'
import {
    v4 as uuidv4,
    validate,
    version
} from 'uuid'

class TAbstractObject {

    get uuid () {
        return this._uuid
    }

    set uuid ( value ) {
        const memberName = 'uuid'
        const expect     = 'Expect an uuid v4.'

        if ( isNull( value ) ) { throw new Error( `${ memberName } cannot be null ! ${ expect }` ) }
        if ( isUndefined( value ) ) { throw new Error( `${ memberName } cannot be undefined ! ${ expect }` ) }
        if ( !validate( value ) || version( value ) !== 4 ) { throw new Error( `Unable to set invalid uuid [${ uuid }] ! ${ expect }` ) }

        this._uuid = value
    }

    getUuid ( target ) {
        target = this.uuid
        return this
    }

    setUuid ( value ) {
        this.uuid = value
        return this
    }

    constructor ( parameters = {} ) {

        const _parameters = {
            ...{
                uuid: uuidv4()
            },
            ...parameters
        }

        this.uuid = _parameters.uuid

    }

}

export { TAbstractObject }

