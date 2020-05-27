function delay(ms){
   return new Promise((resolve)=>{setTimeout(()=>{
        resolve()
    },ms)})
}

const p1 = delay(1500).then(()=>{
    return {
        name:'1500 ms'
    }
})

const p2 = delay(3000).then(()=>{
    return {
        name:'3000 ms'
    }
})


Promise.all([p1,p2]).then((data)=>console.log('ALL', data))
Promise.race([p1,p2]).then((data)=>console.log('RACE', data))