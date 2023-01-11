let string="mmmmmnnnntttookdjr";
char='r';
count=0;
for(let i in string){// i will be index 
  
 if (char === string[i]){
  count=count+1
 }
}
console.log(`The character -${char}- occured in the ${string} is ${count} times`)