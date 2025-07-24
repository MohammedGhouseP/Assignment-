function OuterFunc(){
    let message = "Hello from the outer function!";
    function InnerFunc() {
        console.log(message+" Inside the inner function.");
    }
    
    return InnerFunc;
}
let inner = OuterFunc();
inner(); 