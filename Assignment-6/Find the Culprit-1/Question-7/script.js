var a = parseInt("2") > parseInt("12"); //Code was blasting because we had not typecasted the string to number. So, the comparison was not working properly
//Don't touch below this
if (a) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}