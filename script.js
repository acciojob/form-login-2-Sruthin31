//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () =>{
	const form = document.getElementById("userForm");

	form.addEventListener("submit",(e) =>{
		e.preventDefault();

		const Firstname = document.getElementById("fname").value;
const Lastname = document.getElementById("lname").value;
const Phoneno = document.getElementById("phone").value;
const Email = document.getElementById("email").value;


	const messsage = `First Name: ${Firstname}\nLast Name: ${Lastname}\nPhone Number: ${Phoneno}\nEmail ID: ${Email}`;

	alert(messsage);
	});
});