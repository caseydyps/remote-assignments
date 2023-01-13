function twoSum(nums, target) {
    // your code here
    
    number_length=nums.length-1 //last array = array.length-1 
    var check = true;
    for(i=0; check=true;){
        addup = nums[i]+nums[number_length]// first add last
        if(addup == target){  //addup equals target retun result
            result="["+nums[i]+", "+nums[number_length]+"]"; 
            check= false;
            return result; 
        }
        else if(check=true & addup != target){//if addup != result
            if(i==number_length){ // first = last, i move to next, last restore to last
                i++;
                number_length=nums.length-1;
            }
            else if(i!=number_length){// last move forward
                number_length=number_length-1;
                
            }
            
        }
    }
    



    }
    /*
    For example:
    twoSum([2, 5, 11, 7], 9);
    Should returns:
    [0, 1]
    Because:
    nums[0] + nums[1] is 9
    */