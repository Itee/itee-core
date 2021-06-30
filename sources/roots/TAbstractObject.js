/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 */

import { v4 as uuidv4, validate } from 'uuid'

class TAbstractObject {

    get uuid () {
        return this._uuid
    }

    set uuid ( value ) {
        if(!validate(value)){ throw new Error(`Unable to set invalid uuid [${uuid}] !`)}
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

