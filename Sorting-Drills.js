/* eslint-disable quotes */
const LinkedList = require('./LinkedList');
/** 
 * 1. Understanding merge sort
 * Array = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
 * 
 * RC @1 = middle(8) L[21, 1, 26, 45, 29, 28, 2, 9] ---> R[16, 49, 39, 27, 43, 34, 46, 40]
 * RC @2 = middle(4) L[21, 1, 26, 45] ---> R[29, 28, 2, 9]
 * RC @3 = middle(2) L[21, 1] ---> R[26, 45]
 * RC @4 = middle(1) L[21] ---> R[1]
 *  merge = Array[1, 21]
 * RC @5 = middle(1) L[26] R[45]
 *  merge = Array[26, 45]
 *  merge = Array[1, 21, 26, 45]
 * RC @6 = middle(2) L[29, 28] --->  R[2, 9]
 * RC @7 = middle(1) L[29] R[28] 
 *  merge = Array[28, 29]
 * RC @8 = middle(1) L[2] R[9]
 *  merge = Array[2, 9]
 *  merge = Array[2,9,28,29]
 *  merge = Array[1,2,9,21,26,28,29,45] //Left Side Done
 * 
 * Right Side 
 * RC @9 middle(4) L[16, 49, 39, 27] ---> R[43, 34, 46, 40]
 * RC @10 = middle(2) L[16, 49] ---> R[39, 27]
 * RC @11 = middle(1) L[16] ---> R[49]
 *  merge = Array[16,49]
 * RC 12 = middle(1) L[39] ---> R[27]
 *  merge = Array[27,39]
 *  merge = Array[16,27,39,49]
 * RC 13 = middle(2) = L[43,34] --> R[46,40]
 * RC 14 = middle(1) = L[43] --> R[34]
 *  merge = Array[34,43]
 * RC @15 = middle(1) = L[46] R[40]
 *  merge = Array[40,46]
 *  merge = Array[34,40,43,46] 
 *  merge = Array[16,27,34,39,40,43,46,49] 
 * RC @16 merge = Array[1,2,9,16,21,26,27,28,29,34,39,40,43,45,46,49] 
 * 
 * a. What is the resulting list that will be sorted after 3 recursive calls to mergesort?
 *    Recursive Call #3 - middle(2) L[21, 1] ---> R[26, 45]
 * 
 * b. What is the resulting list that will be sorted after 16 recursive calls to mergesort?
 *    Array[1,2,9,16,21,26,27,28,29,34,39,40,43,45,46,49]
 * 
 * c. What are the first 2 lists to be merged?
 *      1st Merge  --> Array[1, 21]
 *      2nd Merge --> Array[26, 45]
 *      Array[1, 21, 26, 45]
 * 
 * d. Which two lists would be merged on the 7th merge?
 *    7th Merge ---> Array[1,2,9,21,26,28,29,45]
 *  
*/

/**
 * 2. Understanding quicksort
 * 2.1 Array = [3 9 1 14 17 24 22 20]
 * 
 *  a. The pivot could have been 17, but could not have been 14
 *      False, because either one could be the pivot
 *  b. The pivot could have been either 14 or 17
 *      True, the values before 14 and 17 are less in value and the values after 14 and 17 are greater in value
 *  c. Neither 14 nor 17 could have been the pivot
 *      False, both could be the pivot
 *  d. The pivot could have been 14, but could not have been 17
 *      False, because either one could be a pivot
 * 2.2 Array = [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
 *  14	17	13	15	19	10	3	16	9	12
 *  
 * Pivot 12
 * 
 * i=5
 * j=0
 * 10,17,13,15,19,14,3,16,9,12
 *  
 * i=6
 * j=1
 * 10,3,13,15,19,14,17,16,9,12
 * 
 * i=7
 * j=2
 * 10,3,13,15,19,14,17,16,9,12
 * 
 * 
 * i=8
 * j=3
 * 10,3,9,15,19,14,17,16,13,12
 * 
 * 10,3,9,12,19,14,17,16,13,15
 * middle = 3
 * quicksort on 10,3,9,12
 * 
 * 
 * Pivot 14
 * 
 * 14, 17, 13, 15, 19, 10, 3, 16, 9, 12
 * 14, 12, 13, 15, 19, 10, 3, 16, 9, 17
 * 14, 12, 13, 15, 19, 10, 3, 16, 9, 17
 * 14, 12, 13, 9, 19, 10, 3, 16, 15, 17
 * 14, 12, 13, 9, 3, 10, 19, 16, 15, 17
 * 10, 12, 13, 9, 3, 14, 19, 16, 15, 17
 * 3, 12, 13, 9, 10, 14, 19, 16, 15, 17
 * 3, 9, 13, 12, 10, 14, 19, 16, 15, 17
 * 3, 9, 10, 12, 13, 14, 19, 16, 15, 17
 * 
 *  a. When using the last item on the list as a pivot
 *      1st Partition: 10,3,9,12,19,14,17,16,13,15
 *      2nd Partition: 3,9,10,12,19,14,17,16,13,15
 *  b. When using the first item on the list as a pivot
 *      1st Partition: 10,12,13,9,3,14,19,16,15,17
 *      2nd Partition: 3,9,10,12,13,14,19,16,15,17
 * 
 */
/**
 * #3 Implementing quicksort
 */
function quickSort(array, start=0, end = array.length) {
    if(start >= end) {
        return array;
    }                                       
    const middle = partition(array, start, end); 
    array = quickSort(array, start, middle); 
    array = quickSort(array, middle + 1, end); 
    return array;
}

function partition(array, start, end) {
    const pivot = array[end - 1]; 
    let j = start; 
    for(let i = start; i < end - 1; i++) {
        if(array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
}

function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

let arr = [89,30,25,32,72,70,51,42,25,24,53,55,78,50,13,40,48,32,26,2,
    14,33,45,72,56,44,21,88,27,68,15,62,93,98,73,28,16,46,87,28,65,38,
    67,16,85,63,23,69,64,91,9,70,81,27,97,82,6,88,3,7,46,13,11,64,76,
    31,26,38,28,13,17,69,90,1,6,7,64,43,9,73,80,98,46,27,22,87,49,83,
    6,39,42,51,54,84,34,53,78,40,14,5
  ];
//   console.log(partition(arr,0, arr.length));
// console.log(quickSort(arr));

/**
 * #4 Implementing merge sort
 */
function mergeSort(array) {
    if(array.length <=1) { 
        return array;
    }
    const middle = Math.floor(array.length / 2); 
    let left = array.slice(0, middle); 
    let right = array.slice(middle, array.length);

    left = mergeSort(left); 
    right = mergeSort(right); 
    return merge(left, right, array); 
}                                     

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++];
        }
    }
    for(let i = leftIndex; i < left.length; i++) {
        array[outputIndex++] = left[i];
    }

    for(let i = rightIndex; i < right.length; i++) {
        array[outputIndex++] = right[i];
    }
    return array;
}
// console.log(mergeSort(arr));
/**
 * 5. Sorting a linked list using merge sort
 */
//[89,30,25,32,72,70,51,42,25,24]
 let LL = new LinkedList();
 LL.insertLast(89);
 LL.insertLast(30);
 LL.insertLast(25);
 LL.insertLast(32);
 LL.insertLast(72);
 LL.insertLast(70);
 LL.insertLast(51);
 LL.insertLast(42);
 LL.insertLast(24);
 LL.insertLast(53);
 //console.log(LL);
 const listArr = LL.display();
//  console.log(mergeSort(listArr)); //[ 24, 25, 30, 32, 42, 51, 53, 70, 72, 89 ]

 /**
  * 6. Bucket sort
  */
  const bucketData = [1,2,1,1,3,6,2,7,5,2,4,3];
  
  function bucketSort(arr,min,max) {
      let array = new Array(max-min); //creates an array with empty spaces based on the difference between max and min
      for(let i = 0; i < arr.length; i++) {
          array[arr[i] - min] = arr[i];
      }
      return array.filter((n) => n); //removing extra empty items from the new Array
  }
// console.log(bucketSort(bucketData, 1, 5));

  /**
   * 7. Sort in place
   */
function randomSort(arr) {
    for(let i=0; i<Math.floor(arr.length/2); i++) {
       swap(arr, i, Math.floor(Math.random() * (arr.length)));
    }
    return arr;
}
// console.log(randomSort(bucketData));

/**
 * 8. Sorting books
 */

 const bookArr = ['Harry Potter', 'Game of Thrones', 'Lord of the Rings', 'Guardians of The Galaxy', 
 'In Search of Lost', 'Ulysses', 'Don Quixote', 'The Great Gatsby', 'Moby Dick', 'One Hundred Years of Solitude',
 'War and Peace','Hamlet', 'The Divine Comedy', 'The Catcher in the Rye','Alice Adventures in Wonderland'];
 
 function bookSort(bookArr, start=0, end = bookArr.length) {
    if(start >= end) {
        return bookArr;
    }                                       
    const middle = bookPartition(bookArr, start, end); 
    bookArr = quickSort(bookArr, start, middle); 
    bookArr = quickSort(bookArr, middle + 1, end); 
    return bookArr;
}

function bookPartition(bookArr, start, end) {
    const pivot = bookArr[end - 1]; 
    let j = start; 
    for(let i = start; i < end - 1; i++) {
        if(bookArr[i] <= pivot) {
            swap(bookArr, i, j);
            j++;
        }
    }
    swap(bookArr, end-1, j);
    return j;
}
console.log(bookSort(bookArr));