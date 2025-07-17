function prime(num) {
   var pri=false
    for(i=2;i<num;i++){
        if(num%i==0){
            console.log("not prime number");
            console.log("Reason: it has more than 2 or 1 positive diviser");
            pri=true
            break
        }
    }
    if(pri==false){
        console.log("prime");
        console.log("Reason:it has 2 positive diviser (1 and the same number)");
        
    }
}
prime(9)