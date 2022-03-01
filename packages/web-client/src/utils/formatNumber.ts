export const formatNumber = (numberToBeFormatted: number) => {
    return new Intl.NumberFormat().format(numberToBeFormatted.toFixed(2));
  };
