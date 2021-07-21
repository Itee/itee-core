import { Vector3 } from 'three-full'
import {
    OneHalf,
    SquareRootOfThreeOnTwo,
    SquareRootOfTwoOnTwo
}                  from '../constants/constants'

/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 */

//[x:LEFT-RIGHT][y:DOWN-UP][z:BACK-FRONT]
const Left_Down_Back   = new Vector3( -1, -1, -1 ).normalize()
const Left_Down        = new Vector3( -1, -1, +0 ).normalize()
const Left_Down_Front  = new Vector3( -1, -1, +1 ).normalize()
const Left_Back        = new Vector3( -1, +0, -1 ).normalize()
const Left             = new Vector3( -1, +0, +0 ).normalize()
const Left_Front       = new Vector3( -1, +0, +1 ).normalize()
const Left_Up_Back     = new Vector3( -1, +1, -1 ).normalize()
const Left_Up          = new Vector3( -1, +1, +0 ).normalize()
const Left_Up_Front    = new Vector3( -1, +1, +1 ).normalize()
const Down_Back        = new Vector3( +0, -1, -1 ).normalize()
const Down             = new Vector3( +0, -1, +0 ).normalize()
const Down_Front       = new Vector3( +0, -1, +1 ).normalize()
const Back             = new Vector3( +0, +0, -1 ).normalize()
const Null             = new Vector3( +0, +0, +0 ).normalize()
const Front            = new Vector3( +0, +0, +1 ).normalize()
const Up_Back          = new Vector3( +0, +1, -1 ).normalize()
const Up               = new Vector3( +0, +1, +0 ).normalize()
const Up_Front         = new Vector3( +0, +1, +1 ).normalize()
const Right_Down_Back  = new Vector3( +1, -1, -1 ).normalize()
const Right_Down       = new Vector3( +1, -1, +0 ).normalize()
const Right_Down_Front = new Vector3( +1, -1, +1 ).normalize()
const Right_Back       = new Vector3( +1, +0, -1 ).normalize()
const Right            = new Vector3( +1, +0, +0 ).normalize()
const Right_Front      = new Vector3( +1, +0, +1 ).normalize()
const Right_Up_Back    = new Vector3( +1, +1, -1 ).normalize()
const Right_Up         = new Vector3( +1, +1, +0 ).normalize()
const Right_Up_Front   = new Vector3( +1, +1, +1 ).normalize()

/*


 -Z              nnw N nne
 /|\            NW   |   NE
  |          wnw  \  |  /  ene
  |          W ------x------ E
  |          wsw  /  |  \  ese
  |             SW   |   SE
  |              ssw S sse
  |
 _|_________________________________\ +X
  |                                 /

 */
const Cardinales = {
    North:            Back,
    North_North_East: new Vector3( OneHalf, 0, -(SquareRootOfThreeOnTwo) ).normalize(),
    North_East:       Right_Back,
    East_North_East:  new Vector3( SquareRootOfThreeOnTwo, 0, -(OneHalf) ).normalize(),
    East:             Right,
    East_South_East:  new Vector3( SquareRootOfThreeOnTwo, 0, -(-OneHalf) ).normalize(),
    South_East:       Right_Front,
    South_South_East: new Vector3( OneHalf, 0, -(-SquareRootOfThreeOnTwo) ).normalize(),
    South:            Front,
    South_South_West: new Vector3( -OneHalf, 0, -(-SquareRootOfThreeOnTwo) ).normalize(),
    South_West:       Left_Front,
    West_South_West:  new Vector3( -SquareRootOfThreeOnTwo, 0, -(-OneHalf) ).normalize(),
    West:             Left,
    West_North_West:  new Vector3( -SquareRootOfThreeOnTwo, 0, -(OneHalf) ).normalize(),
    North_West:       Left_Back,
    North_North_West: new Vector3( -OneHalf, 0, -(SquareRootOfThreeOnTwo) ).normalize()
}

const Directions = {
    Left_Down_Back,
    Left_Down,
    Left_Down_Front,
    Left_Back,
    Left,
    Left_Front,
    Left_Up_Back,
    Left_Up,
    Left_Up_Front,
    Down_Back,
    Down,
    Down_Front,
    Back,
    Null,
    Front,
    Up_Back,
    Up,
    Up_Front,
    Right_Down_Back,
    Right_Down,
    Right_Down_Front,
    Right_Back,
    Right,
    Right_Front,
    Right_Up_Back,
    Right_Up,
    Right_Up_Front,

    Cardinales
}

// Directions.Cardinale.North

export { Directions }
