let age = 25; //global variable

function displayAge() {
  console.log('Age:', age);
}

function changeAge(newAge) {
  age = newAge;
  console.log('Age changed :', age);
}

displayAge();     
changeAge(30);    
displayAge();     
