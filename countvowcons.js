let vowels=0;
let consonents=0;
let s="AbcdefghijklmnOpqrstuvwxyz";
for(let i=0;i<s.length;i++){
  s1=s[i].toLowerCase()
  
  if(s1== 'a' || s1== 'e' || s1 == 'i'|| s1 == 'o'|| s1 == 'u'){
    vowels++
  }
  else{
    consonents++
  }
}
console.log(vowels,consonents)
