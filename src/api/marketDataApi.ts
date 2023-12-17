import { getNextMarketData } from './mockMarketDataFactory.ts';
import { useMarketDataStore } from "../stores/marketDataStore.ts";


export const subscribeToMarketData = (): () => void => {
    const id = setInterval(() => {
        useMarketDataStore.getState().loadMarketData(getNextMarketData());
    }, 100);

    return () => clearInterval(id);
};