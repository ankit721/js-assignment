let marks=prompt("Enter the marks of a student");

if(marks<0 && marks>100){
    console.log("Invalid marks");
}
else if(marks>90){
    console.log("Marks are "+marks+" and grade is S");
}
else if(marks>80 && marks<=90){
    console.log("Marks are "+marks+" and grade is A");
}
else if(marks>70 && marks<=80){
    console.log("Marks are "+marks+" and grade is B");
}
else if(marks>60 && marks<=70){
    console.log("Marks are "+marks+" and grade is C");
}
else if(marks>50 && marks<=60){
    console.log("Marks are "+marks+" and grade is D");
}
else if(marks>40 && marks<=50){
    console.log("Marks are "+marks+" and grade is E");
}
else{
    console.log("Marks are "+marks+" and grade is F")
}