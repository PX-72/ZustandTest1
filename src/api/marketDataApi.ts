import { getNextMarketData } from './mockMarketDataFactory.ts';
import { useMarketDataStore } from "../stores/useMarketDataStore.ts";


export const subscribeToMarketData = (): () => void => {
    const id = setInterval(() => {
        useMarketDataStore.getState().loadMarketData(getNextMarketData());
    }, 500);

    return () => clearInterval(id);
};