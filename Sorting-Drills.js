/** 
 * 1. Understanding merge sort
 * Array = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
 * 
 * RC @1 = middle(8) L[21, 1, 26, 45, 29, 28, 2, 9] ---> R[16, 49, 39, 27, 43, 34, 46, 40]
 * RC @2 = middle(4) L[21, 1, 26, 45] ---> R[29, 28, 2, 9]
 * RC @3 = middle(2) L[21, 1] ---> R[26, 45]
 * RC @4 = middle(1) L[21] ---> R[1]
 * RC @5 Return in mergerSort = Array[21, 1] and  merge = Array[1, 21]
 * RC @6 = middle(1) L[26] R[45]
 * RC @7 Return in mergeSort = Array[26, 45] and  merge = Array[26, 45]
 * RC @8 Combines the existing array mergeSort = Array [21, 1, 26, 45] and merge = Array[1, 21, 26, 45]
 * RC @9 = middle(2) L[29, 28] --->  R[2, 9]
 * RC @10 = middle(1) L[29] R[28] 
 * RC @11 Return in mergeSort = Array[29, 28] and merge = Array[28, 29]
 * RC @12 = middle(1) L[2] R[9]
 * RC @13 Return in mergeSort = Array[2, 9] and merge = Array[2, 9]
 * RC @14 Combines the existing array mergeSort = Array[29,28,2,9] and merge = Array[2,9,28,29]
 *  
 * RC @15 The Array will combine the prev and the array that just returned [21, 1, 26, 45 , 29, 28, 2, 9] 
 *  Merge Array will be [1,2,9,21,26,28,29,45] and the left side are done processing at RC@8
 * 
 * R[16, 49, 39, 27, 43, 34, 46, 40]
 * RC @16 = middle(4) L[16, 49, 39, 27] ---> R[43, 34, 46, 40]
 * RC @17 = middle(2) L[16, 49] ---> R[39, 27]
 * RC @18 = middle(1) L[16] ---> R[49]
 * RC @19 Return in mergeSort = Array[16,49] and merge = Array[16,49]
 * RC @20 = middle(1) L[39] ---> R[27]
 * RC @21 Return in mergeSort = Array[39,27] and merge = Array[27,39]
 * RC @22 Combines the existing array mergeSort = Array[16,49,39,27] and merge = Array[16,27,39,49]
 * RC @23 = middle(2) = L[43,34] --> R[46,40]
 * RC @24 = middle(1) = L[43] --> R[34]
 * RC @25 Return in mergeSort = Array[43,34] and merge = Array[34,43]
 * RC @26 = middle(1) = L[46] R[40]
 * RC @27 = Return in mergeSort = Array[46,40] and merge = Array[40,46]
 * RC @28 Combiness the existing array mergeSort = Array[43,34,46,40] and merge = Array[34,40,43,46]
 * RC @29 Combines all array mergeSort = Array[16,49,39,27,43,34,46,40] and merge = Array[16,27,34,39,40,43,46,49]
 * RC @30 Combination of the left and the right mergeSort = Array[21,1,26,45,29,28,2,9,16,49,39,27,43,34,46,40] and merge = Array[1,2,9,16,21,26,27,28,29,34,39,40,43,45,46,49]
 * 
 * a. What is the resulting list that will be sorted after 3 recursive calls to mergesort?
 *    Recursive Call #3 - middle(2) = L[21, 1] ---> R[26, 45]
 * 
 * b. What is the resulting list that will be sorted after 16 recursive calls to mergesort?
 *    Recursive Call #16 = middle(4) L[16, 49, 39, 27] ---> R[43, 34, 46, 40]
 * 
 * c. What are the first 2 lists to be merged?
 *      Array[1, 21] and Array[26, 45]
 * 
 * d. Which two lists would be merged on the 7th merge?
 *  RC @6 = middle(1) L[26] R[45]
 *  RC @7 Return in mergeSort = Array[26, 45] and  merge = Array[26, 45] 
 *  
*/
