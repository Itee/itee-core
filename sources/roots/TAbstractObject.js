/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 */

import {
    isNull,
    isUndefined,
    isNotString
}             from 'itee-validators'
import {
    v4 as uuidv4,
    validate,
    version
}             from 'uuid'

class TAbstractObject {

    get name () {
        return this._name
    }

    set name ( value ) {
        const memberName = 'name'
        const expect     = 'Expect a String'

        if ( isNull( value ) ) { throw new Error( `${ memberName } cannot be null ! ${ expect }` ) }
        if ( isUndefined( value ) ) { throw new Error( `${ memberName } cannot be undefined ! ${ expect }` ) }
        if ( isNotString( value ) ) { throw new ReferenceError( 'TAbstractObject.name: Value cannot be null or undefined. Expect an  !' ) }

        this._name = value
    }

    getName ( target ) {
        target.name = this.name
        return this
    }

    setName ( value ) {
        this.name = value
        return this
    }

    get uuid () {
        return this._uuid
    }

    set uuid ( value ) {
        const memberName = 'uuid'
        const expect     = 'Expect an uuid v4.'

        if ( isNull( value ) ) { throw new Error( `${ memberName } cannot be null ! ${ expect }` ) }
        if ( isUndefined( value ) ) { throw new Error( `${ memberName } cannot be undefined ! ${ expect }` ) }
        if ( !validate( value ) || version( value ) !== 4 ) { throw new Error( `Unable to set invalid uuid [${ value }] ! ${ expect }` ) }

        this._uuid = value
    }

    getUuid ( target ) {
        target.uuid = this.uuid
        return this
    }

    setUuid ( value ) {
        this.uuid = value
        return this
    }

    constructor ( parameters = {} ) {

        const _uuid       = uuidv4()
        const _name       = `${ this.constructor.name }_${ _uuid }`
        const _parameters = {
            ...{
                uuid:   _uuid,
                name:   _name,
                logger: null
            },
            ...parameters
        }

        this.uuid   = _parameters.uuid
        this.name   = _parameters.name
        this.logger = _parameters.logger
    }

}

export { TAbstractObject }

