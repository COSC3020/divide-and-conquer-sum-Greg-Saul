function divideAndConquerSum(array) {
    let sum = 0;
    switch(array.length){
        case 0:
            return 0;
            break
        case 1:
            return array[0];
            break;
        case 2:
            return array[0] + array[1];
            break;
        default:
            sum = helper(array);
            return sum;
    }  
}

function helper(arr){
    switch(arr.length){
        // case 1:
        //     return arr[0];
        //     break;
        // case 2:
        //     return arr[0] + arr[1];
        //     break;
        default:
            let firstThird = Math.floor(arr.length / 3);
            let secondThird = firstThird * 2;

            let first = arr.slice(0, firstThird);
            let second = arr.slice(firstThird, secondThird);
            let third = arr.slice(secondThird, arr.length)

            let sum = helper(first) + helper(second) + helper(third);
            return sum;
    }  
    
}
