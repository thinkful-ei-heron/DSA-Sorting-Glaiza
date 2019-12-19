//Bubble Sort
function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

function bubbleSort(array) {
    let swaps = 0;
    for(let i = 0; i < array.length - 1; i++) {
        if(array[i] > array[i + 1]) { //check if values are in the wrong order 
            swap(array, i, i + 1); //then swaps them around 
            swaps++; //and increases the swaps counter
        }
    }
    if(swaps > 0) { //if the number swaps was greater than 0
        return bubbleSort(array); //call bubble sort to keep sorting
    }

    return array; //sorted array
}

//Merge Sort
function mergeSort(array) {
    if(array.length <=1) { //if array has 1 or 0 elements it means it is sorted
        return array;
    }
    const middle = Math.floor(array.length / 2); //slicing array into 2
    let left = array.slice(0, middle); //slicing left
    let right = array.slice(middle, array.length); //slicing right

    left = mergeSort(left); //left->sort each half using mergeSort. 
    right = mergeSort(right); //right->sort each half using mergeSort
    return merge(left, right, array); //merging together in the correct order using merge function
}                                     //returning empty array

function merge(left, right, array) {
    let leftIndex = 0;
    let rightIndex = 0;
    let outputIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]) {
            array[outputIndex++] = left[leftIndex++];
        }
        else {
            array[outputIndex++] = right[rightIndex++]
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

//Quick Sort
function quickSort(array, start=0, end = array.length) {
    //if array length is 0 or 1, it returns the array
    if(start >= end) {
        return array;
    }
                                                 //partioning the array into 2 halves aound a pivot value
    const middle = partition(array, start, end); //all the values which are less value than the pivot table go to left and the other half in the right
    // console.log('middle' +middle)
    array = quickSort(array, start, middle);  //recursively sorting (start-->middle)
    console.log('left'+array)
    array = quickSort(array, middle + 1, end); //recursively sorting (middle-->end)
    console.log('right'+array)
    return array;
}
console.log(quickSort([14, 17, 13, 15, 19, 10, 3, 16, 9, 12]));

//A common in-place algorithm is Lomuto's algorithm
function partition(array, start, end) {
    const pivot = array[end - 1]; //assigning last value in the array as the pivot
    let j = start; //assigning the start value to j
    for(let i = start; i < end - 1; i++) {
        if(array[i] <= pivot) {
            swap(array, i, j);
            j++;
        }
    }
    swap(array, end-1, j);
    return j;
}