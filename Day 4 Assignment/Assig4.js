let type=prompt("Enter the type of operation(Type: Add, Sub, Mult, Div):","Enter the type")
var total=0;
var total_1=1;
if(type=="Add"){
    let n=prompt("Enter the total number of values to be entered","Enter the total number of values")
    for(let i=1;i<=n;i++){
        var num=prompt("Enter "+i+"st value",00);
        var val=Number(num)
        total=total + val;
    }
}
else if(type=="Sub"){
    let n=prompt("Enter the total number of values to be entered","Enter the total number of values")
    for(let i=1;i<=n;i++){
        var num=prompt("Enter "+i+"st value",00);
        var val=Number(num)
        total=total - val;
    }
}
else if(type=="Mult"){
    let n=prompt("Enter the total number of values to be entered","Enter the total number of values")
    for(let i=1;i<=n;i++){
        var num=prompt("Enter "+i+"st value",00);
        var val=Number(num)
        total_1=total_1 * val;
    }
}
else if(type=="Div"){
    let n=prompt("Enter values to be divided","Enter value")
    total_1=n.split(' ')[0]/n.split(' ')[1]
    
}
if(type=="Add" || type=="Sub"){
    console.log("The Calculated Value is",total)
}
else if( type=="Mult" || type=="Div"){
    console.log("The Calculated Value is",total_1)
}
