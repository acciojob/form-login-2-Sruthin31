//your JS code here. If required.
const Btn = document.getElementById("submit");

Btn.addEventListener("click",() => {
	const Firstname = document.getElementById("fname").value;
const Lastname = document.getElementById("lname").value;
const Phoneno = document.getElementById("phone").value;
const Email = document.getElementById("email").value;


	const messsage = `First Name:${Firstname}\nLast Name:${Lastname}\nPhone Number:${Phoneno}\nEmail Id:${Email}`;

	alert(messsage);
});