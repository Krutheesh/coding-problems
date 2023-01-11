let string1="krishna";
let string2="anhsirk";
if (string1.length !== string2.length){
  console.log(`${string1} and ${string2} are not anagrams`);
}
else
{
  let s1=string1.split("");
  let s2=string2.split("");
  let a=sort1(s1).join("")
  let b=sort1(s2).join("")
  if(a === b){
    console.log("anagram")
  }
  else{
    console.log("not a anagram")
  }
}



function sort1(arr){
  for(let i=0;i<arr.length-1;i++){
    for(j=i+1;j<arr.length;j++){
      if(arr[j]<arr[i]){
        temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
      }
    }
  }
  return arr
}