import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import {MarketData} from "../api/mockMarketDataFactory.ts";

type Store = {
    marketData: MarketData | null
};

const initialState: Store = {
    marketData: null
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
                    state.marketData = marketData;
                });
            } catch (err) {
                console.error(`Market data could not be loaded. ${err}`);
            }
        }
    }))
);
