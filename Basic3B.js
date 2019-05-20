function ageCalculatorNew(birthYear){
	var today = new Date(2019);
	var age= today - birthYear;
	var age2= age - 1;
	document.write("You are either " + age + " or " + age2 + " years old")
}
