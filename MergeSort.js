//best, average and worst-case O(nlog(n))
function mergeSort(array, n = array.length) {
    if(array.length <=1) { //if array has 1 or 0 elements it means it is sorted
        return array;
    }

    const middle = Math.floor(array.length / 2); //slicing array into 2
    let left = array.slice(0, middle); //slicing left
    let right = array.slice(middle, array.length); //slicing right

    console.log('middle: '+middle);
    console.log('L=>: ' + left);
    console.log('R=>: ' + right);
    console.log('array length: ' + array.length)

    left = mergeSort(left); //left->sort each half using mergeSort. 
    console.log('=>=>L-merge: ' + left);
    right = mergeSort(right); //right->sort each half using mergeSort
    console.log('=>=>R-merge: ' + right);
    console.log('=>Array[' + array +']');
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
    console.log('Array-merge: ' + array)
    return array;
}
mergeSort([21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]);
//21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40

