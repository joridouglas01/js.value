// use .value to retrieve input data from a form
function getInfo() {
	var username = document.getElementById("username").value
	var password = document.getElementById("password").value
//take note of the spaces of the quotation marks.  It gives propper spacing in the console.  Otherwise it will 
//read like this... your username isjori and your password ispassword
	console.log("your username is " +  username + " and your password is " + password)
}