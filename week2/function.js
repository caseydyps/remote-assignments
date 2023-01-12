function calculate(args) {
    
    // your code here
    var n1 =args.n1 //set n1 as a var
    var n2 =args.n2 //set n2 as a var
    var op =args.op //set op as a var

    if(op=== '+'){ //if op = '+' return n1+n2
        result = n1+n2;
        return result;
    }else if(op=== '-'){ //if op = '-' return n1-n2
        result = n1-n2;
        return result;
    }else{
        console.log('Not supported') //if op= other return 'Not supported'
    }
    
    }
    console.log(calculate({ n1: 2, n2: 3, op: '+' })); // expected output: 5
    console.log(calculate({ n1: 5, n2: 2, op: '-' })); // expected output: 3
    console.log(calculate({ n1: 1, n2: 6, op: 'x' })); // expected output: 'Not supported'