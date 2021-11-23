
let a = new Promise((resolve, reject) => {
   
    return resolve(1);
});
let assynF = async () =>{
    await a
 
}
let a2 = assynF()
console.log({ a2 })