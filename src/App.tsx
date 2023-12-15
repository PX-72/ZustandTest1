import './App.css'
import {useRef} from "react";
import {subscribeToMarketData} from "./api/marketDataApi.ts";
import {useMarketDataStore} from "./stores/useMarketDataStore.ts";
import MarketDataView from "./components/MarketDataView.tsx";

function App() {
    const unsubscribeRef = useRef<(() => void) | null>(null);
    const marketData = useMarketDataStore(state => state.marketData);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
                <button onClick={() => {
                    unsubscribeRef.current = subscribeToMarketData();
                }}>Subscribe</button>
            </div>
            <div>
                <button onClick={() => unsubscribeRef.current?.()}>Unsubscribe</button>
            </div>
            <MarketDataView marketData={marketData!} />
        </div>
    )
}

export default App
