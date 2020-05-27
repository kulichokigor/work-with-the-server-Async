const button = document.querySelector('#load');
const addresIp = document.querySelector('#addres-ip');
const list = document.querySelector('#list');

button.addEventListener('click', ()=>{
    const url1 = 'https://api.ipify.org/?format=json';
    const url2 = 'https://api.ipdata.co/?api-key=test';

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
            return {
                dataUser: new Date().toLocaleString(),
                country: base.country_name,
                city:base.city,
                postal:base.postal,
                region:base.region,
                img:base.flag,
                symbol:base.currency.symbol
            }
        })
        .then(data=>{
            
            for(const key in data){
              list.innerHTML = 
              `<div class="item-list">
                    <div>${data.country}</div>
                    <div>${data.city}</div>
                    <div>${data.postal}</div>
                    <div>${data.region}</div>
                    <div>${data.symbol}</div>
                    <div>${data.dataUser}</div>
                </div>
              `
           }
        })
})