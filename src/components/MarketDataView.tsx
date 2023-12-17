import {toFixedString} from "../utils/numberFormatUtil.ts";
import {useMarketDataStore} from "../stores/useMarketDataStore.ts";

type MarketDataViewProps = {
    currencyPair: string
}

const MarketDataView = ({ currencyPair }: MarketDataViewProps) => {
    const marketData = useMarketDataStore(state => state.marketDataState[currencyPair]);

    return (
        <>
            <div>
                {marketData ?
                    <p>{marketData.ccyPair}: {toFixedString(marketData.bid, marketData.decimals)} / {toFixedString(marketData.ask, marketData.decimals)} ({Math.random()})</p>
                    :
                    <p>loading...</p>
                }

            </div>
        </>
    );
};

export default  MarketDataView;