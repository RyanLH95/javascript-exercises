
const removeFromArray = function (array, ...args) {
  
  const newArray = [];
  
  array.forEach((item) => {
   
    if (!args.includes(item)) {
      newArray.push(item);
    }
  });
  
  return newArray;
};

console.log(removeFromArray([]))

module.exports = removeFromArray;
