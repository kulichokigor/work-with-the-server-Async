const h1 = document.querySelector('h1');
const button = document.querySelector('#load');

// button.addEventListener('click',()=>{
//     const url='https://jsonplaceholder.typicode.com/users'
//     h1.style.color = 'lightseagreen'
//     button.setAttribute('disabled', true)
//     fetch(url)
//         .then(response=>response.json())
//         .then((data)=>{
//             const ul = document.querySelector('#list');
//             ul.style.listStyle="none"
//             const usersList = data.map((item)=>{
//                 return `<li><b style="color:#036f56">${item.id}.</b> ${item.name} (${item.username}). Email: ${item.email}</li>`
//             })
//             ul.insertAdjacentHTML('afterbegin', usersList.join(' '));
//         })
// })


// Async await

button.addEventListener('click',async ()=>{
    const url='https://jsonplaceholder.typicode.com/users'
    h1.style.color = 'lightseagreen'
    button.setAttribute('disabled', true)
    const response = await fetch(url)
    const data = await response.json()
            const ul = document.querySelector('#list');
            ul.style.listStyle="none"
            const usersList = data.map((item)=>{
                return `<li><b style="color:#036f56">${item.id}.</b> ${item.name} (${item.username}). Email: ${item.email}</li>`
            })
            ul.insertAdjacentHTML('afterbegin', usersList.join(' '));

})
