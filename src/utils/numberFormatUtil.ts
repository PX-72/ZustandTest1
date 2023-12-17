
export const toFixedString = (num: number | undefined, decimals = 2): string => {
    return (num ?? 0).toFixed(decimals);

}