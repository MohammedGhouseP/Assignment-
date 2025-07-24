function createCounter(){
    let count = 0;
   return {
    increment:function(){
        count++;
        console.log(`Count: ${count}`);
    },
    getCount:function (){
        return count;
    }
   }
}
let counter = createCounter();
console.log(counter.getCount());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.getCount());