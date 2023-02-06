//a=["new tax policy in budget"]
let a= "new tax policy in budget" ;

let space =0;
for(let i=0; i<a.length;i++){

  if(a[i]==" "){
    space++;
  }
}

console.log("words:", space+1);