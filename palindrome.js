let pali="12321";
let s="";
for(let i=0; i<pali.length;i++)
{
s=pali[i]+s
}
console.log(s)
if (pali === s){
  console.log("The given string is a palindrome");
}
else{
  console.log("The given string is not a palindrome")
}