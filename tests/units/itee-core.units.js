import { expect }       from 'chai'
import { describe, it } from 'mocha'

describe( 'Array', () => {

    beforeEach( () => {
        // runs before each test in this block
    } )

    before( () => {
        // runs before all tests in this block
    } )

    after( () => {
        // runs after all tests in this block
    } )

    afterEach( () => {
        // runs after each test in this block
    } )

    describe( '#indexOf()', () => {

        context( 'when not present', () => {

            it( 'should be true', ()=>{
                const myVar = 'i exist'
                expect(myVar).to.exist
            })

            it( 'should return -1', () => {

                [ 1, 2, 3 ].indexOf( 4 ).should.equal( -1 )

            } )

        } )

    } )

} )
