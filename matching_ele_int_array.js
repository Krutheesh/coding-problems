let x=[1,2,3,4,5,1,2,6,7];
for (let i=0;i<x.length-1;i++){
  for(let j=i+1 ;j<x.length;j++){
    if (x[i]===x[j]){
      console.log(x[i])
    }
  }
}