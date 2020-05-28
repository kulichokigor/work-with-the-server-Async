const button = document.querySelector('#load');
const addresIp = document.querySelector('#addres-ip');
const list = document.querySelector('#list');
const close = document.querySelector('.close')


button.addEventListener('click', ()=>{
    const url1 = 'https://api.ipify.org/?format=json';
    const url2 = 'https://api.ipdata.co/?api-key=test';
    !list.classList.contains('open')?list.classList.add('open'):NaN
    button.setAttribute('disabled',true)
    list.addEventListener('click',event=>{
        event.target.classList.contains('close')?(
            list.classList.remove('open'),
            button.removeAttribute('disabled'),
            list.innerHTML = '<div class="close"></div>'
        ):NaN
    })


    fetch(url1)
        .then(res=>res.json())
        .then((data)=>{
            return addresIp.textContent = data.ip
        })
        .catch((err)=>{
            console.error(err)
        })
    fetch(url2)
        .then(res=>res.json())
        .then((base)=>{
            const userNewList = [{
                dataUser: new Date().toLocaleString(),
                country: base.country_name,
                city:base.city,
                postal:base.postal,
                region:base.region,
                img:base.flag,
                symbol:base.currency.symbol
            }]
            return userNewList
        })

        .then(data=>{
            const itemList = data.map((item)=>{
                return `
                    <div class="conteiner-list">
                        <h5>${item.dataUser}</h5>
                        <br/>
                        <div>${item.country}<div>
                        <br/>
                        <div>${item.city}<div>
                        <br/>
                        <div>${item.postal}<div>
                        <br/>
                        <div>${item.region}<div>
                        <br/>
                        <div>${item.symbol}<div>
                        <br/>
                        <img src="${item.img}" alt="flag"/>
                    </div>
                    `
            })
            list.insertAdjacentHTML('afterbegin', itemList)
        })


})