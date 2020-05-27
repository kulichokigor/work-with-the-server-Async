
console.log('Async')
let courent = 1
const funcInterval = setInterval(() => {
    console.log(courent++)
}, 1000);

setTimeout(()=>{
    clearInterval(funcInterval)
    console.log('STOP')
},3*1000)