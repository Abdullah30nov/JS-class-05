var userInput= +prompt("Enter any number for table: ");
var range = +prompt("Enter table range");
for(i = 1;i <= range ;i++){
document.write( userInput + "x" + i + "=" + userInput*i + "<br>")
}