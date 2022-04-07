export const calculate = {
  newAvgPrice: (
    currAvgPrice: number,
    currShareQuantity: number,
    addBuyPrice: number,
    addBuyQuantity: number,
  ): number => {
    const output =
      (currAvgPrice * currShareQuantity + addBuyPrice * addBuyQuantity) /
      (currShareQuantity + addBuyQuantity);
    return output;
  },
  equity: (AvgPrice: number, ShareQuantity: number): number => {
    return AvgPrice * ShareQuantity * 100;
  },
  totalEquity: (
    currAvgPrice: number,
    currShareQuantity: number,
    addBuyPrice: number,
    addBuyQuantity: number,
  ): number => {
    return (currAvgPrice * currShareQuantity + addBuyPrice * addBuyQuantity) * 100;
  },

  currPotGL: (addBuyPrice: number, currAvgPrice: number): number => {
    return ((addBuyPrice - currAvgPrice) / currAvgPrice) * 100;
  },
  targetPotGL: (targetPrice: number, newAvgPrice: number): number => {
    return ((targetPrice - newAvgPrice) / newAvgPrice) * 100;
  },
  newPotGL: (marketPrice: number, newAvgPrice: number): number => {
    return ((marketPrice - newAvgPrice) / newAvgPrice) * 100;
  },
};
