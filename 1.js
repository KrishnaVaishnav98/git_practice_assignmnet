//Problem 1 : Check whether a number is Prime or not

let n=13;
let count=0;

for(let i=1; i<=n; i++){
  if(n%i==0){
    count+;
  }
}
if(count==2){
  console.log(n,"is prime number")
}
else{
   console.log(n,"is not a prime number")
}