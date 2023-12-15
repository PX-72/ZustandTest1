import { getRandomInt } from '../utils/randomUtil.ts';

export const ECN_LIST = [
    'UBS',
    'Barclays',
    'Swissquote',
    'FXCM',
];

enum CurrencyPair {
    USDEUR = 'USDEUR',
    USDJPY = 'USDJPY',
    GBPUSD = 'GBPUSD',
    USDCHF = 'USDCHF',
    USDCAD = 'USDCAD',
    AUDUSD = 'AUDUSD',
    NZDUSD = 'NZDUSD'
};

export const CCY_PAIRS = [
    CurrencyPair.USDEUR,
    CurrencyPair.USDJPY,
    CurrencyPair.GBPUSD,
    CurrencyPair.USDCHF,
    CurrencyPair.USDCAD,
    CurrencyPair.AUDUSD,
    CurrencyPair.NZDUSD
];

export type MarketData = {
    ccyPair: string,
    bid: number,
    ask: number,
    low: number,
    high: number,
    decimals: number,
    ecn: string
};

const getMinMaxForCcyPair = (ccyPair: string): [number, number, number] => {
    switch (ccyPair) {
        case CurrencyPair.USDEUR: return [0.9245, 0.9796, 4];
        case CurrencyPair.USDJPY: return [143.56, 152.12, 2];
        case CurrencyPair.GBPUSD: return [1.1954, 1.2658, 4];
        case CurrencyPair.USDCHF: return [0.8946, 0.9256, 4];
        case CurrencyPair.USDCAD: return [1.3564, 1.3865, 4];
        case CurrencyPair.AUDUSD: return [0.6234, 0.6464, 4];
        case CurrencyPair.NZDUSD: return [0.4686, 0.6754, 4];
        default: return [0, 0, 4];
    }
};

const getNewPrice = (min: number, max: number): number => min + ((max - min) * Math.random());

const getRandomElement = <T>(array: T[]): T => array[getRandomInt(0, array.length-1)];

const lowMap = new Map<string, number>();
const highMap = new Map<string, number>();

export const getNextMarketData = (): MarketData => {
    const ccyPair = getRandomElement(CCY_PAIRS);

    const [min, max, decimals] = getMinMaxForCcyPair(ccyPair);
    const price1 = getNewPrice(min, max);
    const price2 = getNewPrice(min, max);
    const [currentLow, currentHigh] = price1 < price2 ? [price1, price2] : [price2, price1];

    if (!lowMap.has(ccyPair) || lowMap.get(ccyPair)! > currentLow) lowMap.set(ccyPair, currentLow);
    if (!highMap.has(ccyPair) || highMap.get(ccyPair)! < currentHigh) highMap.set(ccyPair, currentHigh);

    return {
        ccyPair,
        ecn: getRandomElement(ECN_LIST),
        bid: currentLow,
        ask: currentHigh,
        low: lowMap.get(ccyPair)!,
        high: highMap.get(ccyPair)!,
        decimals
    };
};