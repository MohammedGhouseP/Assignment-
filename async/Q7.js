async function fetching(){
 let data = await fetch("https://jsonplaceholder.typicode.com/users")
 let users = await data.json();
 users.map((ele,i)=>{
    console.log(ele.name)
 })
}
fetching();