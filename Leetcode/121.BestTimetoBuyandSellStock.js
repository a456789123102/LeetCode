// var maxProfit = function(prices) {
//     let maxProfits = 0;
//     for(let i = 0 ; i < prices.length-1 ; i++){
//         for(let j = i+1 ; j<prices.length ; j++){
//             const profit = prices[j] - prices[i];
//             if(profit > maxProfits){
//                 maxProfits = profit;
//             }
//         }
//     }
//     return maxProfits
// };

var maxProfit = function (prices) {
  let left = 0,
    right = left + 1;
  let maxProfit = 0;
  while (right < prices.length) {
    if (prices[left] > prices[right]) {
      left = right;

    }
    const profit = prices[right] - prices[left];
    if (profit > maxProfit) {
      maxProfit = profit;
    }
    right++;
  }
  return maxProfit;
};
console.log(maxProfit([4,2,1,7]));
