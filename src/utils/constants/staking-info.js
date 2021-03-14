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
  MUST,
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
  DMT
} from './constants';

const STAKING_INFO = [//TODO: MATIC
  {
    tokens: [MAUSDC, USDC],
    stakingRewardAddress: '0x19FD308bfC9fdC7979a7141A10bc0B4C0267AbBB',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [GHST, QUICK],
    stakingRewardAddress: '0xe8ebE7e46D885d283fb0e0177af7df454DCA111C',
    ended: false,
    name: 'StkGHST-QUICK',
    lp: '0xA02d547512Bb90002807499F05495Fe9C4C3943f'
  },
  {
    tokens: [WBTC, ETHER],
    stakingRewardAddress: '0x62AEF7797512095b6d640E4103264c41386063ae',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MATIC, QUICK],
    stakingRewardAddress: '0xbEe47F087200a493bb8a71c6C76A9CD5396e9F94',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [ETHER, MATIC],
    stakingRewardAddress: '0x5298d2Ea83ca981fCda625df1F9AA03a305738C0',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [ETHER, USDC],
    stakingRewardAddress: '0x16b4Ea4417C610f0F11dAf49EAb8155bbAE4FeEE',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [GHST, USDC],
    stakingRewardAddress: '0x201D66d7d7139E137c51be0DD22c3736B3A81835',
    ended: false,
    name: 'stkGHST-USDC',
    lp: '0x04439eC4ba8b09acfae0E9b5D75A82cC63b19f09'
  },
  {
    tokens: [LINK, ETHER],
    stakingRewardAddress: '0x90BB3F41c7c4C47A16406347EC1112D42c189A9e',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DAI, ETHER],
    stakingRewardAddress: '0xEc1294419F2dda918a14d1D14fE9f3faacf81008',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [FRAX, FXS],
    stakingRewardAddress: '0x99cbBa72d919791009a8c6Db5AaDF1DeA883e0d1',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [ETHER, DEFI5],
    stakingRewardAddress: '0xBe3AF49Bd0EeB5ff7990deaA381ed887eD25938a',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [QUICK, DEFI5],
    stakingRewardAddress: '0xD2d83D63205f5bc44787c21D382FB9f9b8752FFF',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [ETHER, QUICK],
    stakingRewardAddress: '0xff2cc7bb508c40bC201D45A32b1804e822F48058',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [CEL, ETHER],
    stakingRewardAddress: '0xef2c19bbc8e6AA85BBB5F50aB7528c2c0eFDb74C',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MAAAVE, QUICK],
    stakingRewardAddress: '0x5104D3b09b6b12c63584d9abE1f3EcF96E5Fe56C',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [FRAX, QUICK],
    stakingRewardAddress: '0x34aC099bea7Ac58B4a9a6c10ac8F2Eae247d2928',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [QUICK, CEL],
    stakingRewardAddress: '0xEA782586eA4f463B022A63D24C221cb4335c32A6',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [USDC, QUICK],
    stakingRewardAddress: '0x1d86182103c803DD6bde2412A5a9D66Ca7E80a67',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [SX, ETHER],
    stakingRewardAddress: '0x5074f8250534B20160c87bF7Cb48Fe06811C0DBb',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [QUICK, XMARK],
    stakingRewardAddress: '0x7334054b00bA72DeE9a84B1135D76851d21A2938',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DB, MATIC],
    stakingRewardAddress: '0x30aD68a11A4c904Eb7B4858CFa643e9D26516Bc6',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [SUPER, QUICK],
    stakingRewardAddress: '0xdc00407aF961A1F116d9484fB240Bf226BC9bFf3',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [IFARM, MATIC],
    stakingRewardAddress: '0xB367eF9Ff258bCCaF7004b9bC7a007E955C92120',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [SUPER, ETHER],
    stakingRewardAddress: '0xa6c3a26D8b0c4f811413CD7Fc7817C0d04e408A7',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MAUSDT, MAUSDC],
    stakingRewardAddress: '0x5Ce6c2521538711997707105132055De2E334684',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MATUSD, MAUSDC],
    stakingRewardAddress: '0x3655D05758d68938B3Beb3A5461A4863e9327345',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [LINK, QUICK],
    stakingRewardAddress: '0xd143d387fC456608a117Ab730a023F80e7A914f5',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MADAI, MAUSDC],
    stakingRewardAddress: '0x9869367db942A5D690Bfe238347f2d91Bb94A139',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [SWAP, ETHER],
    stakingRewardAddress: '0x87ADb629401664EA47F58c03805F0c28e75943C4',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [SWAP, QUICK],
    stakingRewardAddress: '0x4eB3EfC4b04eE340A6C3623921Be21c285a3034f',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MATIC, USDC],
    stakingRewardAddress: '0xfD15a6a3F07C89B15DB9b59e6880EF1a6550aFb9',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [UBT, ETHER],
    stakingRewardAddress: '0x3765C3b243c456020BD8f947E439f06ba9A8049e',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DB, ETHER],
    stakingRewardAddress: '0x34c065c2aE774037734877B8C308688415AE6688',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DG, QUICK],
    stakingRewardAddress: '0xF9414A4FB22fc040b354f1F9E7C2567F477d8536',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DG, ETHER],
    stakingRewardAddress: '0xF077a4789666eF79E0CfC409b66E2082c3b53872',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [IFARM, QUICK],
    stakingRewardAddress: '0xd8Be944Dd5F5BbC2De00478c44A7770333fdc446',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MAYFI, MAUSDC],
    stakingRewardAddress: '0xC87328298649DACA11228e6Bbf36d3B4AAF4Ae2b',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MAWETH, MAUSDC],
    stakingRewardAddress: '0x046bd5fb1A30046B96Ea85f587241029b0991Cd5',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [QUICK, AZUKI],
    stakingRewardAddress: '0xb7A25b8f17Ad1B5E12dab7B03f8e5fEa5043f7b8',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [ETHER, AZUKI],
    stakingRewardAddress: '0x2ab140994D8f060b70f1D9f8F775E9dA8D1e6Cd1',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MAUNI, MAUSDC],
    stakingRewardAddress: '0x483A66864e09F62272b4dC57EE6a36F1313D6730',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MAUSDC, QUICK],
    stakingRewardAddress: '0xdF39E6998bDE3131F8E79d3110fC772ba74e4613',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [UNITOKEN, QUICK],
    stakingRewardAddress: '0xBF6407a5aBD5215dC5aC9B7554C5C9EA8D9953BF',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [HEX, ETHER],
    stakingRewardAddress: '0x8b6156625C7879421Bf2C8C498F8f1dfE9eA8391',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [HEX, QUICK],
    stakingRewardAddress: '0x8B6e5dF82AB0393c26abEeC1dBf6D9a635be45D6',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [ARIA20, ETHER],
    stakingRewardAddress: '0xd78bBf1D86d3D27A59368371E6482B79D284c6b5',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MALINK, MAUSDC],
    stakingRewardAddress: '0x0f8CB585A95A807CB68E7c2b5DEBbc2d9E8398d3',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [QUICK, OM],
    stakingRewardAddress: '0x295B6bd267B49F5CcaCc0378A15BE4805A7CbBdD',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [QUICK, HH],
    stakingRewardAddress: '0xa9987f077d583305eDB335E2241C18c37c91f1AD',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [UBT, QUICK],
    stakingRewardAddress: '0x00A289344afF9dcA5c40350dCbb4885DFf9521C0',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [QUICK, DMT],
    stakingRewardAddress: '0x739e730D85F0E5C154d2BB9b31B4f3bA5e95ba3F',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [GAME, QUICK],
    stakingRewardAddress: '0xA05Bd910424E2c848D8874C48E9fb8207C496E03',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MAAAVE, MAUSDC],
    stakingRewardAddress: '0x41204E879Cf5f499C1b419792F9E47c6538c040B',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [ETHER, HH],
    stakingRewardAddress: '0x976a261de050935CC816f6e4Df149FEe41b0949F',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [GAME, ETHER],
    stakingRewardAddress: '0x2ef72f744366c6c7c9D9BA967EE0703D6F1f24E9',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [ETHER, DMT],
    stakingRewardAddress: '0x43180e5D0aeC6d3be1E81DC6a83c1DEC049aF5fC',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [EASY, QUICK],
    stakingRewardAddress: '0x43EbA9B080f465138b97BD17C36bbb73C1C2A0F0',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [SX, DAI],
    stakingRewardAddress: '0x38f8eB09a82B96B5a86773681D20d1Ad587385b8',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [ETHER, OM],
    stakingRewardAddress: '0x7aB50EC4b2df4283219996C92d1BE0Eca5F974dB',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [ARIA20, QUICK],
    stakingRewardAddress: '0xed2D83020610d216ed41feD8F9e2361e4A9B5e13',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [SX, QUICK],
    stakingRewardAddress: '0x02D3B842c8Cb2B217D87E9d73cd76CB70242587A',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [VISION, ETHER],
    stakingRewardAddress: '0x2c2b1b3e180E227F87E3AA0Ec4338866109566eD',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [CFI, QUICK],
    stakingRewardAddress: '0x6eD883d937fedce9505868433E6749a63eb974fE',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [VISION, QUICK],
    stakingRewardAddress: '0x9d87912B51Fb2bc9eF395512Fdc7066FCba78201',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MRBAL, QUICK],
    stakingRewardAddress: '0x14d69736b4B72E14dB372A36a0944C025759DfF1',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [ZUT, QUICK],
    stakingRewardAddress: '0x4E6ab1521c5A02E1b7F00D726445910E68164C67',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MUST, MATIC],
    stakingRewardAddress: '0x74Bf881daDaFa45149FEd02D269D6bDF2C482E32',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DSLA, ETHER],
    stakingRewardAddress: '0x5A61ac95F86C2458d844ff1869AC3b3BB5F72D6c',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [CFI, USDC],
    stakingRewardAddress: '0x2ee4CF224546DA48453474472A96138c1A2fCc98',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DSLA, QUICK],
    stakingRewardAddress: '0x05378BdAeE39e1EDda3a711BE174c7771712387E',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [QUICK, MDEF],
    stakingRewardAddress: '0x5E3A895cE02f8c8101A6Bc44520CFE2D0f5654ec',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MATIC, MRBAL],
    stakingRewardAddress: '0xEa4A37B036E15ec89b71ffaf445795f9f70f10E0',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DRC, QUICK],
    stakingRewardAddress: '0xf86Cffba04665e549EFBd946CA1DDFa58af998D4',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [MUST, QUICK],
    stakingRewardAddress: '0x76eaF915ea94fD8261CAF9d8453446768753c82d',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [PPDEX, QUICK],
    stakingRewardAddress: '0xD6c4b56BCd1Fd5A5E3e684125865D995Ff282EB0',
    ended: false,
    lp: '',
    name: ''
  },
  {
    tokens: [DRC, USDC],
    stakingRewardAddress: '0x8E85aA9d2D28130D603F855747fC863aE531120b',
    ended: false,
    lp: '',
    name: ''
  }
]

export const STAKING_INFO_ACTIVE = STAKING_INFO.filter(p => !p.ended);