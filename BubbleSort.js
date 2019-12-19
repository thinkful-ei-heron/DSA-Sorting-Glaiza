//Bubble Sort
//simply swaps the values at 2 indices in an array
function swap(array, i, j) {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
}

//looks through adjacent pairs of values in the array. 
//best-case O(n), if the nodes are already in order so, it simply needs to check each pair 1 time
//average and worst-case O(n^2), each value need swapping with each other value
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

export default  {
    swap
};