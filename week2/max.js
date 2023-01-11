function max(numbers) {
    number_length=numbers.length-1 //last array = array.length-1 
    for(i=0; i<number_length;){
        if(numbers[i]>numbers[number_length]){ //compare the first array item against last item 
            result=numbers[i]; 
            number_length=number_length-1; // if first item>last item, length-1
        }
        else if(numbers[i]<numbers[number_length]){
            result=numbers[number_length];
            i=i+1; // if first item<last item, i+1, i=first item
        }
    }
    return result;
    
}

console.log(max([1, 2, 4, 5])); // expected output: 5
console.log(max([5, 2, 7, 1, 6])); // expected output: 7
