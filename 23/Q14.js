const userProfile = {
  name: "Alice",
  age: 28,
  
  details() {
    return `${this.name} is ${this.age} years old.`;
  },
  
  updateAge(newAge) {
    if (typeof newAge !== 'number' || newAge <= 0) {
      console.error("Invalid age");
      return;
    }
    this.age = newAge;
    console.log(this.details());  
  }
};

userProfile.updateAge(30);       
console.log(userProfile.details()); 

userProfile.updateAge(0);       
userProfile.updateAge(-5);       
