let num=34;
let factor=0;
for(let i=0;i<=num;i++){
    if(num%i==0){
        factor++
    }
}

if(factor==2){
    console.log("prime ")
}else{
    console.log("not a prime ")
}
