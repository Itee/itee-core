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
const Eight              = 8
const Nine               = 9
const Ten                = 10
const Eleven             = 11
const Twelve             = 12
const Thirteen           = 13
const Fourteen           = 14
const Fifteen            = 15
const Sixteen            = 16
const Seventeen          = 17
const Eighteen           = 18
const Nineteen           = 19
const Twenty             = 20
const TwentyOne          = 21
const TwentyTwo          = 22
const TwentyThree        = 23
const TwentyFour         = 24
const TwentyFive         = 25
const TwentySix          = 26
const TwentySeven        = 27
const TwentyEight        = 28
const TwentyNine         = 29
const Thirty             = 30
const Fourty             = 40
const Fifty              = 50
const Sixty              = 60
const Seventy            = 70
const Eighty             = 80
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

const SquareRootOfTwo   = Math.sqrt( Two )
const SquareRootOfThree = Math.sqrt( Three )
const SquareRootOfFour  = Math.sqrt( Four )
const SquareRootOfFive  = Math.sqrt( Five )
const SquareRootOfSix   = Math.sqrt( Six )
const SquareRootOfSeven = Math.sqrt( Seven )
const SquareRootOfEight = Math.sqrt( Eight )
const SquareRootOfNine  = Math.sqrt( Nine )
const SquareRootOfTen   = Math.sqrt( Ten )

const CubeRootOfTwo   = Math.cbrt( Two )
const CubeRootOfThree = Math.cbrt( Three )
const CubeRootOfFour  = Math.cbrt( Four )
const CubeRootOfFive  = Math.cbrt( Five )
const CubeRootOfSix   = Math.cbrt( Six )
const CubeRootOfSeven = Math.cbrt( Seven )
const CubeRootOfEight = Math.cbrt( Eight )
const CubeRootOfNine  = Math.cbrt( Nine )
const CubeRootOfTen   = Math.cbrt( Ten )

/**
 * Two power of two equal 4
 * @const
 * @type {Number}
 */
const TwoPowTwo         = Math.pow( Two, Two )
/**
 * Two power of three equal 8
 * @const
 * @type {Number}
 */
const TwoPowThree       = Math.pow( Two, Three )
/**
 * Two power of four equal 16
 * @const
 * @type {Number}
 */
const TwoPowFour        = Math.pow( Two, Four )
/**
 * Two power of five equal 32
 * @const
 * @type {Number}
 */
const TwoPowFive        = Math.pow( Two, Five )
/**
 * Two power of six equal 64
 * @const
 * @type {Number}
 */
const TwoPowSix         = Math.pow( Two, Six )
/**
 * Two power of seven equal 128
 * @const
 * @type {Number}
 */
const TwoPowSeven       = Math.pow( Two, Seven )
/**
 * Two power of height equal 256
 * @const
 * @type {Number}
 */
const TwoPowEight       = Math.pow( Two, Eight )
/**
 * Two power of nine equal 512
 * @const
 * @type {Number}
 */
const TwoPowNine        = Math.pow( Two, Nine )
/**
 * Two power of ten equal 1.024
 * @const
 * @type {Number}
 */
const TwoPowTen         = Math.pow( Two, Ten )
/**
 * Two power of eleven equal 2.048
 * @const
 * @type {Number}
 */
const TwoPowEleven      = Math.pow( Two, Eleven )
/**
 * Two power of twelve equal 4.096
 * @const
 * @type {Number}
 */
const TwoPowTwelve      = Math.pow( Two, Twelve )
/**
 * Two power of thirteen equal 8.192
 * @const
 * @type {Number}
 */
const TwoPowThirteen    = Math.pow( Two, Thirteen )
/**
 * Two power of fourteen equal 16.384
 * @const
 * @type {Number}
 */
const TwoPowFourteen    = Math.pow( Two, Fourteen )
/**
 * Two power of fifteen equal 32.768
 * @const
 * @type {Number}
 */
const TwoPowFifteen     = Math.pow( Two, Fifteen )
/**
 * Two power of sixteen equal 65.536
 * @const
 * @type {Number}
 */
const TwoPowSixteen     = Math.pow( Two, Sixteen )
/**
 * Two power of seventeen equal 131.072
 * @const
 * @type {Number}
 */
const TwoPowSeventeen   = Math.pow( Two, Seventeen )
/**
 * Two power of heighteen equal 262.144
 * @const
 * @type {Number}
 */
const TwoPowEighteen    = Math.pow( Two, Eighteen )
/**
 * Two power of nineteen equal 524.288
 * @const
 * @type {Number}
 */
const TwoPowNineteen    = Math.pow( Two, Nineteen )
/**
 * Two power of twenty equal 1.048.576
 * @const
 * @type {Number}
 */
const TwoPowTwenty      = Math.pow( Two, Twenty )
/**
 * Two power of twenty-one equal 2.097.152
 * @const
 * @type {Number}
 */
const TwoPowTwentyOne   = Math.pow( Two, TwentyOne )
/**
 * Two power of twenty-two equal 4.194.304
 * @const
 * @type {Number}
 */
const TwoPowTwentyTwo   = Math.pow( Two, TwentyTwo )
/**
 * Two power of twenty-three equal 8.388.608
 * @const
 * @type {Number}
 */
const TwoPowTwentyThree = Math.pow( Two, TwentyThree )
/**
 * Two power of twenty-four equal 16.777.216
 * @const
 * @type {Number}
 */
const TwoPowTwentyFour  = Math.pow( Two, TwentyFour )
/**
 * Two power of twenty-five equal 33.554.432
 * @const
 * @type {Number}
 */
const TwoPowTwentyFive  = Math.pow( Two, TwentyFive )
/**
 * Two power of twenty-six equal 67.108.864
 * @const
 * @type {Number}
 */
const TwoPowTwentySix   = Math.pow( Two, TwentySix )
/**
 * Two power of twenty-seven equal 134.217.728
 * @const
 * @type {Number}
 */
const TwoPowTwentySeven = Math.pow( Two, TwentySeven )
/**
 * Two power of twenty-height equal 268.435.456
 * @const
 * @type {Number}
 */
const TwoPowTwentyEight = Math.pow( Two, TwentyEight )
/**
 * Two power of twenty-nine equal 536.870.912
 * @const
 * @type {Number}
 */
const TwoPowTwentyNine  = Math.pow( Two, TwentyNine )
/**
 * Two power of thirty equal 1.073.741.824
 * @const
 * @type {Number}
 */
const TwoPowThirty      = Math.pow( Two, Thirty )
/**
 * Two power of thirty-one equal 2.147.483.648
 * @const
 * @type {Number}
 */
const TwoPowThirtyOne   = Math.pow( Two, 31 )
/**
 * Two power of thirty-two equal 4.294.967.296
 * @const
 * @type {Number}
 */
const TwoPowThirtyTwo   = Math.pow( Two, 32 )

const Pi      = Math.PI
const TwoPi   = Two * Pi
const ThreePi = Three * Pi
const FourPi  = Four * Pi
const FivePi  = Five * Pi
const SixPi   = Six * Pi
const SevenPi = Seven * Pi
const EightPi = Eight * Pi
const NinePi  = Nine * Pi
const TenPi   = Ten * Pi

const PiOnTwo   = Pi / Two
const PiOnThree = Pi / Three
const PiOnFour  = Pi / Four
const PiOnFive  = Pi / Five
const PiOnSix   = Pi / Six
const PiOnSeven = Pi / Seven
const PiOnEight = Pi / Eight
const PiOnNine  = Pi / Nine
const PiOnTen   = Pi / Ten

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
    Eight,
    Nine,
    Ten,
    Eleven,
    Twelve,
    Thirteen,
    Fourteen,
    Fifteen,
    Sixteen,
    Seventeen,
    Eighteen,
    Nineteen,
    Twenty,
    TwentyOne,
    TwentyTwo,
    TwentyThree,
    TwentyFour,
    TwentyFive,
    TwentySix,
    TwentySeven,
    TwentyEight,
    TwentyNine,
    Thirty,
    Fourty,
    Fifty,
    Sixty,
    Seventy,
    Eighty,
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
    SquareRootOfEight,
    SquareRootOfNine,
    SquareRootOfTen,

    CubeRootOfTwo,
    CubeRootOfThree,
    CubeRootOfFour,
    CubeRootOfFive,
    CubeRootOfSix,
    CubeRootOfSeven,
    CubeRootOfEight,
    CubeRootOfNine,
    CubeRootOfTen,

    TwoPowTwo,
    TwoPowThree,
    TwoPowFour,
    TwoPowFive,
    TwoPowSix,
    TwoPowSeven,
    TwoPowEight,
    TwoPowNine,
    TwoPowTen,
    TwoPowEleven,
    TwoPowTwelve,
    TwoPowThirteen,
    TwoPowFourteen,
    TwoPowFifteen,
    TwoPowSixteen,
    TwoPowSeventeen,
    TwoPowEighteen,
    TwoPowNineteen,
    TwoPowTwenty,
    TwoPowTwentyOne,
    TwoPowTwentyTwo,
    TwoPowTwentyThree,
    TwoPowTwentyFour,
    TwoPowTwentyFive,
    TwoPowTwentySix,
    TwoPowTwentySeven,
    TwoPowTwentyEight,
    TwoPowTwentyNine,
    TwoPowThirty,
    TwoPowThirtyOne,
    TwoPowThirtyTwo,

    Pi,
    TwoPi,
    ThreePi,
    FourPi,
    FivePi,
    SixPi,
    SevenPi,
    EightPi,
    NinePi,
    TenPi,

    PiOnTwo,
    PiOnThree,
    PiOnFour,
    PiOnFive,
    PiOnSix,
    PiOnSeven,
    PiOnEight,
    PiOnNine,
    PiOnTen,

    SquareRootOfTwoOnTwo,
    SquareRootOfThreeOnTwo
}

