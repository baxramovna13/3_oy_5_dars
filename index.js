// uyga vazifa
// 1 masala

// function longestPalindromicSubstring(str) {

//     let longest=""
//     for (let i = 0; i < str.length; i++) {
//         for (let j = i+1; j <=str.length; j++) {
//            let part=str.slice(i,j)
//            let reverse=part.split('').reverse().join('')
//             if (part===reverse && part.length>=longest.length){
//                 longest=part
//             }

//         }

//     }
//     return longest
// }
// console.log(longestPalindromicSubstring("babad"));

// 2 masala

// function rotateArray(arr,num) {
//    let arr1= arr.splice(num)
//    for (const key of arr) {
//     arr1.push(key)
//    }
//     return arr1
// }console.log(rotateArray([1,2,3,4,5],2));

// 3 masala

// function twoSum(arr, num) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i+1; j <= arr.length; j++) {
//       if (arr[i] + arr[j] === num) {
//         return [i,j];
//       }
//     }
//   }
//   return [];
// }
// console.log(twoSum([2, 7, 11, 15], 9));

// 4 masala

// function sumElements(arr,num) {
//     let sum=0
//     for (const item of arr) {
//        sum+=item
//     }
//     if (sum===num) {
//      return true
//     } else{
//      return false
//     }
// }
// console.log(sumElements([2,4,1],7));

// 5 masala

function arrDifferense(arr1,arr2) {

   let result1=[]
   for (const key of arr1) {
    if(!arr2.includes(key)){
        result1.push(key)
    }
   }
   for (const item of arr2) {
    if (!arr1.includes(item)) {
        result1.push(item)
    }
   }
    
    return result1
}
console.log(arrDifferense([2,4,1],[2,3,8]));
