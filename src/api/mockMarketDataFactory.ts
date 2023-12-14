import { getRandomInt, getRandomDecimal } from '../utils/randomUtil.ts';

export const ECN_LIST = [
    'UBS',
    'Barclays',
    'Swissquote',
    'FXCM',
];

export const CCY_PAIRS = [
    'USDEUR',
    'USDJPY',
    'GBPUSD',
    'USDCHF',
    'USDCAD',
    'AUDUSD',
    'NZDUSD',
];

const getMinMaxForCcyPair = (ccyPair: string): [number, number, number] => {
    switch (ccyPair) {
        case CCY_PAIRS.USDEUR: return [0.9245, 0.9796, 4];
        case CCY_PAIRS.USDJPY: return [143.56, 152.12, 2];
        case CCY_PAIRS.GBPUSD: return [1.1954, 1.2658, 4];
        case CCY_PAIRS.USDCHF: return [0.8946, 0.9256, 4];
        case CCY_PAIRS.USDCAD: return [1.3564, 1.3865, 4];
        case CCY_PAIRS.AUDUSD: return [0.6234, 0.6464, 4];
        case CCY_PAIRS.NZDUSD: return [0.4686, 0.6754, 4];
        default: return [0, 0, 4];
    }
}