
export const toFixedString = (num: number | undefined, decimals: number | undefined): string => {
    return num == null ? '0.'.padEnd(decimals ?? 2, '0') : num.toFixed(decimals);

}