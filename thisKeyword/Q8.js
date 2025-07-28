function personInfo() {
    console.log(this.name + " is " + this.age + " years old.");
}

let info = {
    name: "John",
    age: 30
};

personInfo.call(info); 
