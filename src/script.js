// Referências do DOM - HTML


const lblBTC = document.getElementById('lblBTC');
const btnConsultar = document.getElementById('btnConsultar');

//Lógica de Programção

const API = axios.create({
    baseURL:'https://www.mercadobitcoin.net/api/BTC/ticker/'
});

async function consultarBTC(){
    const response = await API.get();
    console.log(response.data.ticker.high);
    lblBTC.innerHTML = response.data.ticker.high;
};

btnConsultar.onclick = ()=>{
    consultarBTC();
};