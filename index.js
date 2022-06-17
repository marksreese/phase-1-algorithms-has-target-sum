function hasTargetSum(array, target) {
  for (let i=0; i<array.length-1; i++ ){
    for (let j=i+1; j<array.length; j++){
      if (array[i] + array[j] === target){
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  1) for index i=1, loop index j=i+1 until j=array.length-1
  2) add array[i]+array[j], compare to target
  3) if sum = target, return true
  4) if sum != target, loop for i=2, 3... until i=array.length-2
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
