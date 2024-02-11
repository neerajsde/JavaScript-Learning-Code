let arr = [10,20,30,40,50,60,70,80,90,100];

// Binary Searching Algorithms
function BinarySearch(arr, target){
    let start = 0;
    let end = arr.length - 1;
    
    while(start <= end){
        let mid = parseInt((start + end)/2);
        if(arr[mid] == target){    
            return mid;
        }
        else if(arr[mid] < target){
            start = mid + 1;
        }
        else if(arr[mid] > target){
            end = mid - 1;
        }
    }
    return -1;
}

const target = 80;
let index = BinarySearch(arr, target);
if(index == -1){
    console.log('Not found');
}
else{
    console.log('Found at Index: ', index);
}