//bubble sort 
//comparing side by side elements and swapping the elements if the element is greatest
//in each iteration the largest element will moved to the end of array means that in 1st iteration the largest will move to the end and in second iteration the 2nd largest element moved end-1,..

let x=[1,3,4,3,4,6,4,6,77,91,0];
for(let j=0;j<x.length-1;j++){
  for(let i=0; i<x.length-1-j; i++){
  if(x[i]>x[i+1]){
    temp=x[i];
    x[i]=x[i+1];
    x[i+1]=temp;
  }
}
}
console.log(x)