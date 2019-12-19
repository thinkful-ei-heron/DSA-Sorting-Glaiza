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
 *  merge = Array[1, 21, 26, 45] //combines the RC@6 and RC@10
 * RC @6 = middle(2) L[29, 28] --->  R[2, 9]
 * RC @7 = middle(1) L[29] R[28] 
 *  merge = Array[28, 29]
 * RC @8 = middle(1) L[2] R[9]
 *  merge = Array[2, 9]
 *  merge = Array[2,9,28,29] //combines the RC@16 and RC@20
 *  merge = Array[1,2,9,21,26,28,29,45] //Left Side Done
 * 
 * Right Side 
 * RC @9 middle(4) L[16, 49, 39, 27] ---> R[43, 34, 46, 40]
 * RC @10 = middle(2) L[16, 49] ---> R[39, 27]
 * RC @11 = middle(1) L[16] ---> R[49]
 *  merge = Array[16,49]
 * RC 12 = middle(1) L[39] ---> R[27]
 *  merge = Array[27,39]
 *  merge = Array[16,27,39,49]//Combines RC @27 and RC@31
 * RC 13 = middle(2) = L[43,34] --> R[46,40]
 * RC 14 = middle(1) = L[43] --> R[34]
 *  merge = Array[34,43]
 * RC @15 = middle(1) = L[46] R[40]
 *  merge = Array[40,46]
 *  merge = Array[34,40,43,46] //RC @37 and RC @41
 *  merge = Array[16,27,34,39,40,43,46,49] //RC @32 and RC@42
 * RC @16 merge = Array[1,2,9,16,21,26,27,28,29,34,39,40,43,45,46,49] //Left-->RC @22 and Right-->RC@43
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
 * 
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
  console.log(quickSort(arr));