var a=10;
var b=8;
var c=null;
var d; //undefined variable
{
    let c=80;// Value of "c" is 80 only inside the block
    const b=2;
    console.log(c);
    console.log(b);
    console.log("<br>");
}

console.log(a==b);
console.log(a+b);
console.log(c);
console.log(d);