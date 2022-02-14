/**
 * @author [Tristan Valcke]{@link https://github.com/Itee}
 * @license [BSD-3-Clause]{@link https://opensource.org/licenses/BSD-3-Clause}
 */

const Symbols = {
    ChessPieces:   {
        Black: {
            King:   '♚',
            Queen:  '♛',
            Rook:   '♜',
            Bishop: '♝',
            Knight: '♞',
            Pawn:   '♟︎'
        },
        White: {
            King:   '♔',
            Queen:  '♕',
            Rook:   '♖',
            Bishop: '♗',
            Knight: '♘',
            Pawn:   '♙'
        }
    },
    MahjongTiles:  {
        Winds:      {
            East:  '🀀',
            South: '🀁',
            West:  '🀂',
            North: '🀃'
        },
        Dragons:    {
            Red:   '🀄',
            Green: '🀅',
            White: '🀆'
        },
        Characters: {
            One:   '🀇',
            Two:   '🀈',
            Three: '🀉',
            Four:  '🀊',
            Five:  '🀋',
            Six:   '🀌',
            Seven: '🀍',
            Eight: '🀎',
            Nine:  '🀏'
        },
        Bamboos:    {
            One:   '🀐',
            Two:   '🀑',
            Three: '🀒',
            Four:  '🀓',
            Five:  '🀔',
            Six:   '🀕',
            Seven: '🀖',
            Eight: '🀗',
            Nine:  '🀘'
        },
        Circles:    {
            One:   '🀙',
            Two:   '🀚',
            Three: '🀛',
            Four:  '🀜',
            Five:  '🀝',
            Six:   '🀞',
            Seven: '🀟',
            Eight: '🀠',
            Nine:  '🀡'
        },
        Flowers:    {
            Plum:          '🀢',
            Orchid:        '🀣',
            Bamboo:        '🀤',
            Chrysanthemum: '🀥'
        },
        Seasons:    {
            Spring: '🀦',
            Summer: '🀧',
            Autumn: '🀨',
            Winter: '🀩'
        },
        Joker:      '🀪',
        Back:       '🀫'
    },
    DominoTiles:   {
        Horizontal: {
            Back: '🀰',

            Zero_Zero:  '🀱',
            Zero_One:   '🀲',
            Zero_Two:   '🀳',
            Zero_Three: '🀴',
            Zero_Four:  '🀵',
            Zero_Five:  '🀶',
            Zero_Six:   '🀷',

            One_Zero:  '🀸',
            One_One:   '🀹',
            One_Two:   '🀺',
            One_Three: '🀻',
            One_Four:  '🀼',
            One_Five:  '🀽',
            One_Six:   '🀾',

            Two_Zero:  '🀿',
            Two_One:   '🁀',
            Two_Two:   '🁁',
            Two_Three: '🁂',
            Two_Four:  '🁃',
            Two_Five:  '🁄',
            Two_Six:   '🁅',

            Three_Zero:  '🁆',
            Three_One:   '🁇',
            Three_Two:   '🁈',
            Three_Three: '🁉',
            Three_Four:  '🁊',
            Three_Five:  '🁋',
            Three_Six:   '🁌',

            Four_Zero:  '🁍',
            Four_One:   '🁎',
            Four_Two:   '🁏',
            Four_Three: '🁐',
            Four_Four:  '🁑',
            Four_Five:  '🁒',
            Four_Six:   '🁓',

            Five_Zero:  '🁔',
            Five_One:   '🁕',
            Five_Two:   '🁖',
            Five_Three: '🁗',
            Five_Four:  '🁘',
            Five_Five:  '🁙',
            Five_Six:   '🁚',

            Six_Zero:  '🁛',
            Six_One:   '🁜',
            Six_Two:   '🁝',
            Six_Three: '🁞',
            Six_Four:  '🁟',
            Six_Five:  '🁠',
            Six_Six:   '🁡'
        },
        Verticale:  {
            Back: '🁢',

            Zero_Zero:  '🁣',
            Zero_One:   '🁤',
            Zero_Two:   '🁥',
            Zero_Three: '🁦',
            Zero_Four:  '🁧',
            Zero_Five:  '🁨',
            Zero_Six:   '🁩',

            One_Zero:  '🁪',
            One_One:   '🁫',
            One_Two:   '🁬',
            One_Three: '🁭',
            One_Four:  '🁮',
            One_Five:  '🁯',
            One_Six:   '🁰',

            Two_Zero:  '🁱',
            Two_One:   '🁲',
            Two_Two:   '🁳',
            Two_Three: '🁴',
            Two_Four:  '🁵',
            Two_Five:  '🁶',
            Two_Six:   '🁷',

            Three_Zero:  '🁸',
            Three_One:   '🁹',
            Three_Two:   '🁺',
            Three_Three: '🁻',
            Three_Four:  '🁼',
            Three_Five:  '🁽',
            Three_Six:   '🁾',

            Four_Zero:  '🁿',
            Four_One:   '🂀',
            Four_Two:   '🂁',
            Four_Three: '🂂',
            Four_Four:  '🂃',
            Four_Five:  '🂄',
            Four_Six:   '🂅',

            Five_Zero:  '🂆',
            Five_One:   '🂇',
            Five_Two:   '🂈',
            Five_Three: '🂉',
            Five_Four:  '🂊',
            Five_Five:  '🂋',
            Five_Six:   '🂌',

            Six_Zero:  '🂍',
            Six_One:   '🂎',
            Six_Two:   '🂏',
            Six_Three: '🂐',
            Six_Four:  '🂑',
            Six_Five:  '🂒',
            Six_Six:   '🂓'
        }
    },
    PlayingCards:  {
        Back:     '🂠',
        Spades:   {
            Ace:    '🂡',
            Two:    '🂢',
            Three:  '🂣',
            Four:   '🂤',
            Five:   '🂥',
            Six:    '🂦',
            Seven:  '🂧',
            Eight:  '🂨',
            Nine:   '🂩',
            Ten:    '🂪',
            Jack:   '🂫',
            Knight: '🂬',
            Queen:  '🂭',
            King:   '🂮'
        },
        Hearts:   {
            Ace:    '🂱',
            Two:    '🂲',
            Three:  '🂳',
            Four:   '🂴',
            Five:   '🂵',
            Six:    '🂶',
            Seven:  '🂷',
            Eight:  '🂸',
            Nine:   '🂹',
            Ten:    '🂺',
            Jack:   '🂻',
            Knight: '🂼',
            Queen:  '🂽',
            King:   '🂾'
        },
        Diamonds: {
            Ace:    '🃁',
            Two:    '🃂',
            Three:  '🃃',
            Four:   '🃄',
            Five:   '🃅',
            Six:    '🃆',
            Seven:  '🃇',
            Eight:  '🃈',
            Nine:   '🃉',
            Ten:    '🃊',
            Jack:   '🃋',
            Knight: '🃌',
            Queen:  '🃍',
            King:   '🃎'
        },
        Clubs:    {
            Ace:    '🃑',
            Two:    '🃒',
            Three:  '🃓',
            Four:   '🃔',
            Five:   '🃕',
            Six:    '🃖',
            Seven:  '🃗',
            Eight:  '🃘',
            Nine:   '🃙',
            Ten:    '🃚',
            Jack:   '🃛',
            Knight: '🃜',
            Queen:  '🃝',
            King:   '🃞'
        },
        Joker:    {
            Red:   '🃏',
            White: '🃟',
            Black: '🂿'
        },
        Trumps:   {
            Fool:         '🃠',
            Individual:   '🃡',
            Childhood:    '🃢',
            Youth:        '🃣',
            Maturity:     '🃤',
            OldAge:       '🃥',
            Morning:      '🃦',
            Afternoon:    '🃧',
            Evening:      '🃨',
            Night:        '🃩',
            EarthAndAir:  '🃪',
            WaterAndFire: '🃫',
            Dance:        '🃬',
            Shopping:     '🃭',
            OpenAir:      '🃮',
            VisualArt:    '🃯',
            Spring:       '🃰',
            Summer:       '🃱',
            Autumn:       '🃲',
            Winter:       '🃳',
            TheGame:      '🃴',
            Collective:   '🃵'
        }
    },
    Miscellaneous: {},
    Emoticons:     {

    },
    Transports:    {},
    Alchemical:    {}
}

export {
    Symbols
}
