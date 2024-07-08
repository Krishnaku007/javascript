const myNums = [1, 2, 3, 4];

// const myTotal=myNums.reduce(function(acc, currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval

// },0)

// const myTotal=myNums.reduce((acc, curr)=>acc+curr,0)
// console.log(myTotal);

const shoppingCart = [
  {
    itemName: "Js course",
    price: 2999,
  },
  {
    itemName: "Python course",
    price: 999,
  },
  {
    itemName: "Web dev course",
    price: 4999,
  },
  {
    itemName: "MObile dev course",
    price: 2999,
  },
];
const totalprice = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(totalprice);