import {
  EASY,
  USDC,
  ETHER,
  UNITOKEN,
  QUICK,
  DAI,
  WBTC,
  MATIC,
  OM,
  GHST,
  MAUSDC,
  MAAAVE,
  SX,
  MALINK,
  MAUNI,
  MAYFI,
  MAUSDT,
  MATUSD,
  MADAI,
  MAWETH,
  SWAP,
  DB,
  GAME,
  HEX,
  MRBAL,
  ZUT,
  FRAX,
  IFARM,
  VISION,
  PPDEX,
  DEGEN,
  DG,
  UBT,
  FXS,
  CEL,
  ARIA20,
  CFI,
  DSLA,
  DRC,
  LINK,
  DEFI5,
  SUPER,
  XMARK,
  AZUKI,
  HH,
  MDEF,
  DMT,
  WISE,
  CC10,
  MOCEAN,
  ZUZ,
  USDT
} from './constants';

const STAKING_INFO = [//TODO: MATIC
  { tokens: [GHST,QUICK],
    stakingRewardAddress: '0x24E6D900985bf2B6a59dAC5A306b267b9836b7E2',
    ended: false,
    name: 'StkGHST-QUICK',
    lp: '0xA02d547512Bb90002807499F05495Fe9C4C3943f',
    baseToken: QUICK },
  { tokens: [MATIC,QUICK],
    stakingRewardAddress: '0x3280EAe9011093c0ab8ef7bc4B9B0C5a16782Fa2',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [MAUSDC,USDC],
    stakingRewardAddress: '0x096a536c4a91C03c90f3190cf7387Efa60D05aed',
    ended: false,
    lp: '',
    name: '',
    baseToken: USDC },
  { tokens: [WBTC,ETHER],
    stakingRewardAddress: '0xE2E9b08d6e556FE3e3cAe167d771a0825489F844',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [ETHER,MATIC],
    stakingRewardAddress: '0x99Dd173d47ed51954875f67929D07cBA15487B68',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [ETHER,USDC],
    stakingRewardAddress: '0x3ABB60e80aCd507a89CC1C48c40DfBcc66d4197D',
    ended: false,
    lp: '',
    name: '',
    baseToken: USDC },
  { tokens: [LINK,ETHER],
    stakingRewardAddress: '0xFc891BfcA1Ac4959171123547a1AfaF79FE1006E',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [GHST,USDC],
    stakingRewardAddress: '0xb23dC586ab75De399461768bfc047E930F58D4Ea',
    ended: false,
    name: 'stkGHST-USDC',
    lp: '0x04439eC4ba8b09acfae0E9b5D75A82cC63b19f09',
    baseToken: USDC },
  { tokens: [QUICK,WISE],
    stakingRewardAddress: '0x4405117A9379A3EBa5eA5Ee08d9820640B5A0524',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [FRAX,FXS],
    stakingRewardAddress: '0x6c1506624fB87120387355B6Dc90eEb2Cef8D336',
    ended: false,
    lp: '',
    name: '',
    baseToken: FRAX },
  { tokens: [ETHER,WISE],
    stakingRewardAddress: '0xE69d7BB570d55a9Ef10Bb18F3d1609E128d5a6Ce',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [USDC,QUICK],
    stakingRewardAddress: '0x1843936FbfF1F65Ee5d2860FaCFDFed3AD92cC7D',
    ended: false,
    lp: '',
    name: '',
    baseToken: USDC },
  { tokens: [MAAAVE,QUICK],
    stakingRewardAddress: '0x8263032143f2d7a46b2124B1fDB0b23C86B1E797',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [CEL,ETHER],
    stakingRewardAddress: '0xeab691696312B730429bc934a6c166b508686959',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [ETHER,DEGEN],
    stakingRewardAddress: '0x4AF17ea16620029e91f13565D7912B39D96d0c0F',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [FRAX,QUICK],
    stakingRewardAddress: '0xA3C1a3F32896D02143821B5302d2D16CF7C4259E',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [SX,ETHER],
    stakingRewardAddress: '0x88729279cF7d1b996d27e6a57F4FE7B8A224adFC',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [ETHER,DEFI5],
    stakingRewardAddress: '0x2C6444f925ED06f7fC36191d913Deb155b4dBe23',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [DEGEN,QUICK],
    stakingRewardAddress: '0x607346469bddC67a219BC3e0fD6441067B32B7E5',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [ETHER,QUICK],
    stakingRewardAddress: '0xee0c45AFF4c64da567d2Fa82B850797E5802B18E',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [QUICK,CC10],
    stakingRewardAddress: '0x746008253470928c5D894F5692F3CE3dCB65D41d',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [DAI,ETHER],
    stakingRewardAddress: '0xd9Fc7bf48FD0b4b0bd83dBA375bd3ebC42877126',
    ended: false,
    lp: '',
    name: '',
    baseToken: DAI },
  { tokens: [QUICK,DEFI5],
    stakingRewardAddress: '0xa264dC4eC5e9E3D49F46C74d66570CED12C16ED3',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [DG,QUICK],
    stakingRewardAddress: '0x9E6d15B51cf22A4831355229c64fcE02435c00FE',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [SWAP,QUICK],
    stakingRewardAddress: '0x1393c8238E5Ac1d56062A7f2833D51a95D0bA3FD',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [GAME,QUICK],
    stakingRewardAddress: '0xb587D382DA6c0DEB08B14B32D1a9a5aEd797dD9e',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [LINK,QUICK],
    stakingRewardAddress: '0xc0050f60B813C1d443dea4aa7c418Efc6664d4A5',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [DG,ETHER],
    stakingRewardAddress: '0xb2Dbd29eA634cd09Dc0c1cfE575164aba593DE67',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [QUICK,CEL],
    stakingRewardAddress: '0x4CAbb612219A50bBAf60Ba72a8939ad3D2709760',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [ARIA20,ETHER],
    stakingRewardAddress: '0x7ADaed604E9947559f9D28E9d6BfFfe4f9d6F046',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [QUICK,MOCEAN],
    stakingRewardAddress: '0x43B872A4d17B8FaBE28ceac21787a054D79f4409',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [MATIC,MOCEAN],
    stakingRewardAddress: '0x4077Db56ADdD1E183B37727AE9787739757a8479',
    ended: false,
    lp: '',
    name: '',
    baseToken: MATIC },
  { tokens: [DB,QUICK],
    stakingRewardAddress: '0x69627ACE33398538caE386808F14D9DD21dD286e',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [MATUSD,MAUSDC],
    stakingRewardAddress: '0x477Cdd18ff380e1fA3e8474d4F278494BACC333e',
    ended: false,
    lp: '',
    name: '',
    baseToken: MAUSDC },
  { tokens: [MAYFI,MAUSDC],
    stakingRewardAddress: '0x4C38c0430e7c8529D8eD56A9765300A8d8296B74',
    ended: false,
    lp: '',
    name: '',
    baseToken: MAUSDC },
  { tokens: [UBT,ETHER],
    stakingRewardAddress: '0x4c222554519A52c474072bc88cCa99a7b79560b2',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [MADAI,MAUSDC],
    stakingRewardAddress: '0x1Efd52814be7eaC88A80f3508755eD5EBBC35bd3',
    ended: false,
    lp: '',
    name: '',
    baseToken: MAUSDC },
  { tokens: [MATIC,USDC],
    stakingRewardAddress: '0x5Fe476B0B473f4aA02409711d6F70f7596f0D174',
    ended: false,
    lp: '',
    name: '',
    baseToken: USDC },
  { tokens: [ETHER,HH],
    stakingRewardAddress: '0x043449B5D41A65d3256a9B3be7822df34d0d4Ba4',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [IFARM,QUICK],
    stakingRewardAddress: '0x73d99729857e1452DFb87ee42822FF55def74706',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [MAUSDC,QUICK],
    stakingRewardAddress: '0xAE0035A87A513DfeDcb76767Ae89f8fcE6b664Df',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [MAAAVE,MAUSDC],
    stakingRewardAddress: '0xF8aB37C16596077D551B4c7dB9F319f4ec774573',
    ended: false,
    lp: '',
    name: '',
    baseToken: MAUSDC },
  { tokens: [IFARM,MATIC],
    stakingRewardAddress: '0xaf03948Eee936D8Dd95Bd52b16Bc862B67E52b02',
    ended: false,
    lp: '',
    name: '',
    baseToken: MATIC },
  { tokens: [MAUSDT,MAUSDC],
    stakingRewardAddress: '0xdA56080d7f531E612A8C9c340D59f2ce791e277A',
    ended: false,
    lp: '',
    name: '',
    baseToken: MAUSDC },
  { tokens: [QUICK,XMARK],
    stakingRewardAddress: '0xfB834aB3ABB9F54Fb3091e7D868E040f772EA9F7',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [SUPER,QUICK],
    stakingRewardAddress: '0xD97e48a3461861D5F7DF1efc53A130a24E1A7E4a',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [MAUNI,MAUSDC],
    stakingRewardAddress: '0xC224d73da464318688B94156553A8eBAaB6d8C18',
    ended: false,
    lp: '',
    name: '',
    baseToken: MAUSDC },
  { tokens: [DB,MATIC],
    stakingRewardAddress: '0x224F7a3649A91E346666889FAad17A3e1768DdA4',
    ended: false,
    lp: '',
    name: '',
    baseToken: MATIC },
  { tokens: [UNITOKEN,QUICK],
    stakingRewardAddress: '0xB018259A3Ed0970b31c6E0e549576ec4Fd00B8E1',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [QUICK,ZUZ],
    stakingRewardAddress: '0xBD63092DdEc0A19441EBb6a493cFD3D0723b520B',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [MALINK,MAUSDC],
    stakingRewardAddress: '0x4DAd518191CdC089B2D05F71F91Cc57cB30cFf7A',
    ended: false,
    lp: '',
    name: '',
    baseToken: MAUSDC },
  { tokens: [SUPER,ETHER],
    stakingRewardAddress: '0xaD3730dc36B5208966852a3200C2cA98d743F34F',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [SWAP,ETHER],
    stakingRewardAddress: '0x4F343B86907C534ebD3eDc0656EAD8E90ed4A85E',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [UBT,QUICK],
    stakingRewardAddress: '0xF79971bB055010a17a9C55D51f78BB55faB33b78',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [USDC,USDT],
    stakingRewardAddress: '0xb00cbd3a3Aef53E4A4DAfEB10eE051F5695fBdba',
    ended: false,
    lp: '',
    name: '',
    baseToken: USDC },
  { tokens: [SX,QUICK],
    stakingRewardAddress: '0xCd19329065D282029Cc183941bbd4E8444A129Ca',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [VISION,ETHER],
    stakingRewardAddress: '0x3f8574F51Ce9fB7563E46592BBCaDc61262b7094',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [MAWETH,MAUSDC],
    stakingRewardAddress: '0x931e48FF9d82832355Bb5bddDfd2d524ca976624',
    ended: false,
    lp: '',
    name: '',
    baseToken: MAUSDC },
  { tokens: [DB,ETHER],
    stakingRewardAddress: '0xF21d2Eb9d047dF7c64D3cA207D5696019170F14B',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [QUICK,HH],
    stakingRewardAddress: '0x4d92ba81B298C6b25C026a75a805FadD93Ca8c24',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [ETHER,DMT],
    stakingRewardAddress: '0xC8b0B69C78B697B2F863f1396128ec27510F13d0',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [EASY,QUICK],
    stakingRewardAddress: '0xc446cf6C687F3e86A603093b1fd71320066173B0',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [HEX,QUICK],
    stakingRewardAddress: '0x16F564E63a59663685b4fAbF0B930Db51C10680E',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [QUICK,AZUKI],
    stakingRewardAddress: '0x9eC47f9cEEdD8729fCF4924a034c32Ad48D7D1a1',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [SX,DAI],
    stakingRewardAddress: '0x782888CBca733370018dEd580b11bB262Ea74aaC',
    ended: false,
    lp: '',
    name: '',
    baseToken: DAI },
  { tokens: [QUICK,DMT],
    stakingRewardAddress: '0x37150A948b7BF10d985Cc6236a78A962Cd907309',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [GAME,ETHER],
    stakingRewardAddress: '0x7BbdB6A6D8574201BEA92EDBFAE38aab30590B83',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [VISION,QUICK],
    stakingRewardAddress: '0xB601C1b554A5581795503210863Be4183e9438E4',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [ETHER,AZUKI],
    stakingRewardAddress: '0x49ceCcC529646bCFDe760A70E10b820b62FF082b',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [QUICK,OM],
    stakingRewardAddress: '0xfe99eb504FE976BE32CDCEFE0607FeBfB8EC5852',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [DSLA,QUICK],
    stakingRewardAddress: '0xBC62f8E20988b148B2dD1c594F951FC5DaBBC6e7',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [ARIA20,QUICK],
    stakingRewardAddress: '0xa56132909a6489272b8Da5c4B29295E1c198C2f5',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [CFI,QUICK],
    stakingRewardAddress: '0xbd8d72e6c0f97a856cB1d9620f8AF692029FEFAa',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [DSLA,ETHER],
    stakingRewardAddress: '0xdCBaF301cf75E8927D26043f7505B0A8Be403818',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [HEX,ETHER],
    stakingRewardAddress: '0x17d576D6e77208bD24b98C42f61D61b794546CcD',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [ETHER,OM],
    stakingRewardAddress: '0x24447faDa54cE60a060885DD91F98e8B0846cc02',
    ended: false,
    lp: '',
    name: '',
    baseToken: ETHER },
  { tokens: [CFI,USDC],
    stakingRewardAddress: '0xE6c947e89C519EB2285D12B5ea30e299a3D3aD99',
    ended: false,
    lp: '',
    name: '',
    baseToken: USDC },
  { tokens: [DRC,QUICK],
    stakingRewardAddress: '0x809Dba8D1D4Ab78b9Cb9ac37996455Ef34A606DF',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [PPDEX,QUICK],
    stakingRewardAddress: '0x3a243F55266B3BB35187bf8fD63d52003Bb9e69d',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [ZUT,QUICK],
    stakingRewardAddress: '0x473E418cd0e2B7e704D9C5510bAb2A848eFe3240',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [QUICK,MDEF],
    stakingRewardAddress: '0xec1360B07c57996B01968b054e737C9ab3038f5D',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [MATIC,MRBAL],
    stakingRewardAddress: '0x086EA5c740780Afbc0269bA79B090886b828326D',
    ended: false,
    lp: '',
    name: '',
    baseToken: MATIC },
  { tokens: [MRBAL,QUICK],
    stakingRewardAddress: '0x75c0b1898F5Fff3431A1ADbDC2d05FB5c2C6422e',
    ended: false,
    lp: '',
    name: '',
    baseToken: QUICK },
  { tokens: [DRC,USDC],
    stakingRewardAddress: '0xdBA1C0b5465023a42C0cea28E59071B7e6d367c2',
    ended: false,
    lp: '',
    name: '',
    baseToken: USDC }
]

export const STAKING_INFO_ACTIVE = STAKING_INFO.filter(p => !p.ended);