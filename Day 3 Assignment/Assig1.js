let number=prompt("Enter a number","0")
let num=oddeven(number)


function oddeven(a){
   return a%2;
}


if(num==0){
    console.log("The number entered is "+number+" and this Number is even.")
}
else{
    console.log("The number entered is "+number+" and this Number is odd.")
}
