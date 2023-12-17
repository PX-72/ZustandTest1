import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import {MarketData} from "../api/mockMarketDataFactory.ts";

type Store = {
    currencyPairs: string[],
    marketDataState: {
        [currencyPair: string]: MarketData | null
    }
};

const initialState: Store = {
    currencyPairs: [],
    marketDataState: {}
};

type Actions = {
    loadMarketData: (marketData: MarketData) => void
};

export const useMarketDataStore = create<Store & Actions, [['zustand/immer', never]]>(
    immer((set) => ({
        ...initialState,
        loadMarketData: (marketData: MarketData) => {
            try {
                set((state) => {
                    if (!state.currencyPairs.includes(marketData.ccyPair))
                        state.currencyPairs.push(marketData.ccyPair);

                    state.marketDataState[marketData.ccyPair] = marketData;
                });
            } catch (err) {
                console.error(`Market data could not be loaded. ${err}`);
            }
        }
    }))
);
