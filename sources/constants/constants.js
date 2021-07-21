/**
 * A freezed javascript object used like an enum.
 * @typedef {object} Enum
 * @constant
 * @example
 * var Meal = toEnum( {
 *     Food: 'Tartiflette',
 *     Drink: 'Saint-Emilion',
 *     Dessert: 'Mousse au chocolat'
 * } )
 *
 * if( Foo.includes('Tartiflette') {
 *     // Happy
 * }
 *
 * var myDrink = 'coke'
 * if( myDrink === Meal.Drink ) {
 *
 * } else {
 *     // Your life is a pain
 * }
 *
 * var MealTypes = Meal.types
 * // ['Tartiflette', 'Saint-Emilion', 'Mousse au chocolat' ]
 *
 */

// Maths
const Zero               = 0
const One                = 1
const Two                = 2
const Three              = 3
const Four               = 4
const Five               = 5
const Six                = 6
const Seven              = 7
const Height             = 8
const Nine               = 9
const Ten                = 10
const Eleven             = 11
const Twelve             = 12
const Thirteen           = 13
const Fourteen           = 14
const Fifteen            = 15
const Sixteen            = 16
const Seventeen          = 17
const Heighteen          = 18
const Nineteen           = 19
const Twenty             = 20
const Thirty             = 30
const Fourty             = 40
const Fifty              = 50
const Sixty              = 60
const Seventy            = 70
const Heighty            = 80
const Ninety             = 90
const OneHundred         = 100
const FiveHundred        = 500
const OneThousand        = 1000
const TenThousand        = 10000
const OneHundredThousand = 100000
const OneMillion         = 1000000

const OneHalf     = 1 / 2
const OneThird    = 1 / 3
const TwoThird    = 2 / 3
const OneFourth   = 1 / 4
const TwoFourth   = 2 / 4
const ThreeFourth = 3 / 4

const SquareRootOfTwo    = Math.sqrt( Two )
const SquareRootOfThree  = Math.sqrt( Three )
const SquareRootOfFour   = Math.sqrt( Four )
const SquareRootOfFive   = Math.sqrt( Five )
const SquareRootOfSix    = Math.sqrt( Six )
const SquareRootOfSeven  = Math.sqrt( Seven )
const SquareRootOfHeight = Math.sqrt( Height )
const SquareRootOfNine   = Math.sqrt( Nine )
const SquareRootOfTen    = Math.sqrt( Ten )

const CubeRootOfTwo    = Math.cbrt( Two )
const CubeRootOfThree  = Math.cbrt( Three )
const CubeRootOfFour   = Math.cbrt( Four )
const CubeRootOfFive   = Math.cbrt( Five )
const CubeRootOfSix    = Math.cbrt( Six )
const CubeRootOfSeven  = Math.cbrt( Seven )
const CubeRootOfHeight = Math.cbrt( Height )
const CubeRootOfNine   = Math.cbrt( Nine )
const CubeRootOfTen    = Math.cbrt( Ten )

const Pi       = Math.PI
const TwoPi    = Two * Pi
const ThreePi  = Three * Pi
const FourPi   = Four * Pi
const FivePi   = Five * Pi
const SixPi    = Six * Pi
const SevenPi  = Seven * Pi
const HeightPi = Height * Pi
const NinePi   = Nine * Pi
const TenPi    = Ten * Pi

const PiOnTwo    = Pi / Two
const PiOnThree  = Pi / Three
const PiOnFour   = Pi / Four
const PiOnFive   = Pi / Five
const PiOnSix    = Pi / Six
const PiOnSeven  = Pi / Seven
const PiOnHeight = Pi / Height
const PiOnNine   = Pi / Nine
const PiOnTen    = Pi / Ten

// Trigonometri
const SquareRootOfTwoOnTwo   = SquareRootOfTwo / Two
const SquareRootOfThreeOnTwo = SquareRootOfThree / Two

export {
    Zero,
    One,
    Two,
    Three,
    Four,
    Five,
    Six,
    Seven,
    Height,
    Nine,
    Ten,
    Eleven,
    Twelve,
    Thirteen,
    Fourteen,
    Fifteen,
    Sixteen,
    Seventeen,
    Heighteen,
    Nineteen,
    Twenty,
    Thirty,
    Fourty,
    Fifty,
    Sixty,
    Seventy,
    Heighty,
    Ninety,
    OneHundred,
    FiveHundred,
    OneThousand,
    TenThousand,
    OneHundredThousand,
    OneMillion,

    OneHalf,
    OneThird,
    TwoThird,
    OneFourth,
    TwoFourth,
    ThreeFourth,

    SquareRootOfTwo,
    SquareRootOfThree,
    SquareRootOfFour,
    SquareRootOfFive,
    SquareRootOfSix,
    SquareRootOfSeven,
    SquareRootOfHeight,
    SquareRootOfNine,
    SquareRootOfTen,

    CubeRootOfTwo,
    CubeRootOfThree,
    CubeRootOfFour,
    CubeRootOfFive,
    CubeRootOfSix,
    CubeRootOfSeven,
    CubeRootOfHeight,
    CubeRootOfNine,
    CubeRootOfTen,

    Pi,
    TwoPi,
    ThreePi,
    FourPi,
    FivePi,
    SixPi,
    SevenPi,
    HeightPi,
    NinePi,
    TenPi,

    PiOnTwo,
    PiOnThree,
    PiOnFour,
    PiOnFive,
    PiOnSix,
    PiOnSeven,
    PiOnHeight,
    PiOnNine,
    PiOnTen,

    SquareRootOfTwoOnTwo,
    SquareRootOfThreeOnTwo
}

