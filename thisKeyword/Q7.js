function multiplyNumber(num1, num2) {
    const helper={
        multiply:function(){
            console.log(num1*num2);
        }
    }
    return helper.multiply.apply([10,20]);
}

console.log(multiplyNumber(10,20));