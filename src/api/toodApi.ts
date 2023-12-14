export type MarketData = {
    ccyPair: string,
    bid: number,
    offer: number,
    low: number,
    high: number,
    ecn: string
};

const getRandomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const MAX_FETCH_LATENCY = 1500;

export const getTodos = async (): Promise<MarketData[]> => {

    const fetch = new Promise(resolve => {
        setTimeout(() => {
            const numberOfTodos = getRandomInt(1, 4);
            const todoSet = new Set<string>();
            while(todoSet.size < numberOfTodos){
                const index = getRandomInt(0, TODOS.length - 1);
                todoSet.add(TODOS[index]);
            }
            resolve([...todoSet]);
        }, getRandomInt(100, MAX_FETCH_LATENCY));
    });

    setInterval(() => {

    }, 2000);
};