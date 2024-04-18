function divideAndConquerSum(array) {
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
            let firstThird = Math.floor(array.length / 3);
            let secondThird = firstThird * 2;

            let first = array.slice(0, firstThird);
            let second = array.slice(firstThird, secondThird);
            let third = array.slice(secondThird, array.length)

            let sum = divideAndConquerSum(first) + divideAndConquerSum(second) + divideAndConquerSum(third);
            return sum;
    }  
}
