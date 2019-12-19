/** 
 * 1. Understanding merge sort
 * Array = [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
 * 
 * middle(8) L[21, 1, 26, 45, 29, 28, 2, 9] ---> R[16, 49, 39, 27, 43, 34, 46, 40]
 * RC @1 = middle(4) L[21, 1, 26, 45] ---> R[29, 28, 2, 9]
 * RC @2 = middle(2) L[21, 1] ---> R[26, 45]
 * RC @3 = middle(1) L[21] ---> R[1]
 * RC @4 = 21
 * RC @5 = 1
 * RC @6 merge = Array[1, 21]
 * RC @7 = middle(1) L[26] R[45]
 * RC @8 = 26
 * RC @9 = 45
 * RC @10 merge = Array[26, 45]
 * RC @11 merge = Array[1, 21, 26, 45] //combines the RC@6 and RC@10
 * RC @12 = middle(2) L[29, 28] --->  R[2, 9]
 * RC @13 = middle(1) L[29] R[28] 
 * RC @14 = 29
 * RC @15 = 28
 * RC @16 merge = Array[28, 29]
 * RC @17 = middle(1) L[2] R[9]
 * RC @18 = 2
 * RC @19 = 9
 * RC @20 merge = Array[2, 9]
 * RC @21 merge = Array[2,9,28,29] //combines the RC@16 and RC@20
 * RC @22 merge = Array[1,2,9,21,26,28,29,45] //Left Side Done
 * 
 * Right Side 
 * middle(4) L[16, 49, 39, 27] ---> R[43, 34, 46, 40]
 * RC @23 = middle(2) L[16, 49] ---> R[39, 27]
 * RC @24 = middle(1) L[16] ---> R[49]
 * RC @25 = 16
 * RC @26 = 49
 * RC @27 merge = Array[16,49]
 * RC @28 = middle(1) L[39] ---> R[27]
 * RC @29 = 39
 * RC @30 = 27
 * RC @31 merge = Array[27,39]
 * RC @32 merge = Array[16,27,39,49]//Combines RC @27 and RC@31
 * RC @33 = middle(2) = L[43,34] --> R[46,40]
 * RC @34 = middle(1) = L[43] --> R[34]
 * RC @35 43
 * RC @36 34
 * RC @37 merge = Array[34,43]
 * RC @38 = middle(1) = L[46] R[40]
 * RC @39 46
 * RC @40 40
 * RC @41 merge = Array[40,46]
 * RC @42 merge = Array[34,40,43,46] //RC @37 and RC @41
 * RC @43 merge = Array[16,27,34,39,40,43,46,49] //RC @32 and RC@42
 * RC @44 merge = Array[1,2,9,16,21,26,27,28,29,34,39,40,43,45,46,49] //Left-->RC @22 and Right-->RC@43
 * 
 * a. What is the resulting list that will be sorted after 3 recursive calls to mergesort?
 *    Recursive Call #3 - middle(2) = L[21, 1] ---> R[26, 45]
 * 
 * b. What is the resulting list that will be sorted after 16 recursive calls to mergesort?
 *    Recursive Call #16 merge = Array[28, 29]
 * 
 * c. What are the first 2 lists to be merged?
 *      1st Merge  --> RC @6 merge = Array[1, 21]
 *      2nd Merge --> RC @10 merge = Array[26, 45]
 *      RC @11 merge = Array[1, 21, 26, 45]
 * 
 * d. Which two lists would be merged on the 7th merge?
 *  7th Merge ---> RC @22 merge = Array[1,2,9,21,26,28,29,45] , all data from the left list
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
 *  a. When using the last item on the list as a pivot
 * 
 *  b. When using the first item on the list as a pivot
 * 
 * 
 */