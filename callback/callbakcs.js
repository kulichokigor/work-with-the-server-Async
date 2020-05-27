//Старий підхід до роботи з базами CallBakc

//Client=>Server=>DataBase=>Server=>Client

// setTimeout(() => {
//     console.log('Клієнт: Хочу отримати список користувачів')
//     console.log('...')
//         setTimeout(() => {
//             console.log('Сервер: Запит на отримання списку користувачів в БД(база даних)')
//             console.log('...')
//                 setTimeout(() => {
//                     console.log('БД: Формую список користувачів серверу')
//                     console.log('...')
//                         setTimeout(() => {
//                             console.log('сервер: Трансформую список користувачів для клієнта')
//                             console.log('...')
//                                 setTimeout(() => {
//                                     console.log('Клієнт: Отримав дані та оброблюю їх')
//                                     console.log(':)')
//                                 }, 1000);
//                         }, 500);
//                 }, 500);
//         }, 500);
// }, 1000);


const promise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Клієнт: Хочу отримати список користувачів')
        console.log('...')
        resolve()
    },1000)
})
promise.then(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('Сервер: Запит на отримання списку користувачів в БД(база даних)')
            console.log('...')
            resolve()
        },500)
    })
})
.then(()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const userBd = [
                {idUser:'001', firstNameUser:'Ihor', secondNameUser: 'Kulyk'},
                {idUser:'002', firstNameUser:'Alex', secondNameUser: 'Mogila'}
            ]
            console.log('БД: Формую список користувачів серверу',userBd)
            console.log('...')
            resolve(userBd)
        },500)
    })
})
.then((user)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const clientBase = user.map((i)=>{
                return {
                    id:i.idUser,
                    name:i.firstNameUser + " " + i.secondNameUser
                }
            })
            // reject('не зміг трансформувати')
            console.log('сервер: Трансформую список користувачів для клієнта', clientBase)
            console.log('...')
            resolve()
        },500)
    })
})
.then(()=>{
    setTimeout(()=>{
        console.log('Клієнт: Отримав дані та вивів їх на екран')
        
    },1000)
})
.catch((error)=>{
    console.error(error)
})
.finally(function(){
    console.log(':)')
})