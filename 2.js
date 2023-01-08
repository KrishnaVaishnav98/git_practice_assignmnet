//**Problem 2 :** Check whether a string is palindrome or not.

let str="naman";
let str2="";

for(let i=str.length-1; i>=0; i--){
    str2+=str[i];
  }

if(str == str2){
  console.log("String is palindrome")
}
else{
  console.log("String is not palindrome")
}
