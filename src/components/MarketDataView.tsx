import {toFixedString} from "../utils/numberFormatUtil.ts";
import {MarketData} from "../api/mockMarketDataFactory.ts";

type MarketDataViewProps = {
    marketData: MarketData
}

const MarketDataView = ({ marketData }: MarketDataViewProps) => {
    const {
        ccyPair = 'unknown ccy',
        //ecn = '',
        bid = 0,
        ask = 0,
        //low = 0,
        //high = 0,
        decimals = 2
    } = marketData;

    return (
        <>
            <div>
                {ccyPair}: {toFixedString(bid, decimals)} / {toFixedString(ask, decimals)}
            </div>
        </>
    );
};

export default  MarketDataView;