//Remaingin method of STRING

//Common input to all String
let name="               Hello!!! Hope everyone's fit and healthy....                ";

//length(): It tels the user the length of a particular string.
//Example:
console.log(name.length);

//charAt(): This function tells the user the character present at that particular position.
//Example: 
console.log(name.charAt(17));

//endsWith(): This function checks whether a string ends with specified string or characters.
//example:
console.log(name.endsWith("."));

//repeat(): This returns a new string with a specified number of copies of an existing string.
//Example:
console.log(name.repeat(10));

//trim(): This function removes whitespace from both ends of a string.
//Example:
console.log(name.trim());

//substring():It returns the characters in a string between “from” and “to” indexes, NOT including “to” itself. “To” is optional, and if omitted, up to the end of the string is assumed.
//Example:
console.log(name.substring(15,27));

//split(): It returns the characters in a string between “from” and “to” indexes, NOT including “to” itself. “To” is optional, and if omitted, up to the end of the string is assumed.
//Example:
console.log(name.split("o"));

//replace(): Searches and replaces the regular expression (or sub string) portion (match) with the replaced text instead.
//Example:
console.log(name.replace("Hope","I Think"));