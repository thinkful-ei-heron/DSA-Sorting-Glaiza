
const swap = require ('./BubbleSort');

//it uses a  divide and conquer approach
function quickSort(array, start=0, end = array.length) {
    //if array length is 0 or 1, it returns the array
    if(start >= end) {
        return array;
    }
                                                 //partioning the array into 2 halves aound a pivot value
    const middle = partition(array, start, end); //all the values which are less value than the pivot table go to left and the other half in the right
    array = quickSort(array, start, middle);  //recursively sorting (start-->middle)
    array = quickSort(array, middle + 1, end); //recursively sorting (middle-->end)
    return array;
}

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
console.log(quickSort(arr))