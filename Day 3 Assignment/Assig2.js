//Entering an indirect input using PROMPT
let os=prompt("Enter OS name and OS version:");

//Using string split, I am converting a string to an array
let a=os.split(' ');

//Using array I an separating OS name and OS version
console.log("The OS name is "+a[0]+" and version is ",a[1]);
