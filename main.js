// 2073. Time Needed to Buy Tickets

tickets = [84, 49, 5, 24, 70, 77, 87, 8], k = 3

var timeRequiredToBuy = function (tickets, k) {
  let timeTaken = 0;
  while (tickets[k] !== 0) {
    for (let i = 0; i < tickets.length; i++) {
      if (tickets[i] > 0) {
        timeTaken += 1;
        tickets[i]-=1;
        if (k === i &&tickets[i] === 0) {
          break
        }
      }
    }
  }

  console.log(timeTaken)
};



timeRequiredToBuy(tickets, k)
