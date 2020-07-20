let name=prompt("Enter Employee name:","Enter name of employee")
let sales=prompt("Enter total number of sales:","Enter total sales")
let reward=null
if(sales<0){
    console.log("No REWARDS!!!!")
}
else if(sales>0 && sales<=5000){
    reward=sales*0.2
}
else if(sales>5000 && sales<=10000){
    reward=(5000*0.2)+(sales-5000)*0.5
}
else if(sales>10000 && sales<=20000){
    reward=(5000*0.2)+(5000*0.5)+(sales-10000)*0.7
}
else if(sales>20000){
    reward=(5000*0.2)+(5000*0.5)+(10000*0.7)+(sales-20000)*0.1
}
console.log("Total commission earned by "+name+" is ",reward)