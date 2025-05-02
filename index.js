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

// function arrDifferense(arr1,arr2) {

//    let result1=[]
//    for (const key of arr1) {
//     if(!arr2.includes(key)){
//         result1.push(key)
//     }
//    }
//    for (const item of arr2) {
//     if (!arr1.includes(item)) {
//         result1.push(item)
//     }
//    }
    
//     return result1
// }
// console.log(arrDifferense([2,4,1],[2,3,8]));

// 6 masala

// function mostFrequentElement(arr) {
//     let addElements={}
//     let maxCount=0
//     let mostFrec=null
//     for (const key of arr) {
//         addElements[key]=(addElements[key]||0)+1
//         if(addElements[key]>maxCount){
//             maxCount=addElements[key]
//             mostFrec=key
//         }
//     }
//     return mostFrec
// }
// console.log(mostFrequentElement([1,3,1,3,2,1,3,3]));

// 7 masala

// function incrementDigits(str) {
   
//    let result=""
//    for (const item of str) {
//     if (!isNaN(item) && item>=0 && item<=9) {
//         result+=(+item+1)%10
        
//     } else {
//         result+=item
        
//     }
//    }
//    return result
// }console.log(incrementDigits("abs456"));

// 8 masala
// function longestIncreasingSubarrayLength(arr) {
//     if (arr.length === 0) return 0;

//     let maxLength = 1;
//     let currentLength = 1;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > arr[i - 1]) {
//             currentLength++;
//             if (currentLength > maxLength) {
//                 maxLength = currentLength;
//             }
//         } else {
//             currentLength = 1;
//         }
//     }

//     return maxLength;
// }
// console.log(longestIncreasingSubarrayLength([10, 20, 30, 10, 40, 50, 52, 55, 6]));

// 9 masala
// function countOccurrences(arr) {
//    let countMap={}
//    for (const key of arr) {
//     countMap[key]=(countMap[key]||0)+1
//    }
//    return countMap
// }
// console.log(countOccurrences([1,2,2,2,3,4,4,4,5]));

// 10 masala
function sumElements(arr) {
    let sum = 0;
    for (const item of arr) {
        
        sum += item.reduce((acc, curr) => acc + curr, 0);
    }
    return sum;
}

console.log(sumElements([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

