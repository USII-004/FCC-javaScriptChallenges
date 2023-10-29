// Design a cash register drawer function checkCashRegister() that accepts purchase price as 
// the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) 
// as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a 
// change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the 
// change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key 
// change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
// sorted in highest to lowest order, as the value of the change key.

// Currency Unit	Amount
// Penny	$0.01 (PENNY)
// Nickel	$0.05 (NICKEL)
// Dime	$0.1 (DIME)
// Quarter	$0.25 (QUARTER)
// Dollar	$1 (ONE)
// Five Dollars	$5 (FIVE)
// Ten Dollars	$10 (TEN)
// Twenty Dollars	$20 (TWENTY)
// One-hundred Dollars	$100 (ONE HUNDRED)
// See below for an example of a cash-in-drawer array:

// [
  // ["PENNY", 0.01],
  // ["NICKEL", 0.05],
  // ["DIME", 0.1],
  // ["QUARTER", 0.25],
  // ["ONE", 1],
  // ["FIVE", 5],
  // ["TEN", 10],
  // ["TWENTY", 20],
  // ["ONE HUNDRED", 100]
// ]


const checkCashRegister = (price, cash, cid) => {
  const UNIT_AMOUNT = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  };

  let totalCID = 0;
  for (let [_, amount] of cid) {
    totalCID += amount * 100;
  }

  let changeToGive = (cash - price) * 100;
  const changeArray = [];

  if (changeToGive > totalCID) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (changeToGive === totalCID) {
    return { status: "CLOSED", change: cid };
  } else {
    cid = cid.reverse();
    for (let [currency, available] of cid) {
      const unitAmount = UNIT_AMOUNT[currency];
      let temp = [currency, 0];
      while (changeToGive >= unitAmount && available > 0) {
        temp[1] += unitAmount / 100;
        available -= unitAmount / 100;
        changeToGive -= unitAmount;
      }
      if (temp[1] > 0) {
        changeArray.push(temp);
      }
    }
  }

  if (changeToGive > 0) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  }

  return { status: "OPEN", change: changeArray };
};




checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);


/* CODE EXPLANATION */

/* 1. Defining currency units using the array currencyUnit */

/* 2. initialize change and totalCiD and using the for loop to checkthe total cash in dreawer 
for every element in the CiD array, then coverts the total CiD to a fixe delcimal number */

/* 3. using if statement to handle the different cases which are 
Case 1: If there's not enough cash in the drawer to provide change, return 
{ status: "INSUFFICIENT_FUNDS", change: [] }.

Case 2: If the cash in the drawer exactly matches the change due, return 
{ status: "CLOSED", change: cid }.

Case 3: Calculate change denominations: This loop goes through each currency unit from 
highest to lowest. It calculates how many coins/bills can be returned and adds them to the 
changeArr.

Case 4: Check if change can be given or if there's remaining change: If changeArr is empty 
(no change can be given) or if there's still remaining change, return 
{ status: "INSUFFICIENT_FUNDS", change: [] }.

Case 5: If change can be given, return the change array:

*/ 