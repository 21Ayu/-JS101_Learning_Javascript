let str="google";
let b=""
let y=""
for(let i=(str.length/2) -1;i>=0;i--)
  {
   b=b+str[i];
  }


for(let i=(str.length)-1;i>=(str.length/2);i--)
  {
   b=b+str[i];
  }
console.log(b);