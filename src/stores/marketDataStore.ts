import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { devtools } from 'zustand/middleware';
import {MarketData} from "../api/mockMarketDataFactory.ts";

type Store = {
    marketDataState: {
        [currencyPair: string]: MarketData | null
    }
};

const initialState: Store = {
    marketDataState: {}
};

type Actions = {
    loadMarketData: (marketData: MarketData) => void
};

export const useMarketDataStore = create<Store & Actions, [['zustand/immer', never], ['zustand/devtools', never]]>(
    immer(devtools((set) => ({
        ...initialState,
        loadMarketData: (marketData: MarketData) => {
            try {
                set((state) => {
                    state.marketDataState[marketData.ccyPair] = marketData;
                }, true, 'setMarketData');
            } catch (err) {
                console.error(`Market data could not be loaded. ${err}`);
            }
        }
    }), { enabled: process.env.NODE_ENV !== 'production' }))
);
