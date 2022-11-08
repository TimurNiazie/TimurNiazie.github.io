let ws = new WebSocket('wss://stream.binance.com:9443/ws/etheur@trade')
let stockPriceElement = document.getElementById('stock-price')
let lastPrice = null;
ws.onmessage = (event) => {
  let stockObject = JSON.parse(event.data);
  let price = parseFloat(stockObject.p).toFixed(2);
  stockPriceElement.innerText = price;
  stockPriceElement.style.color = !lastPrice || lastPrice === price ? 'white' : price > lastPrice ? 'green' : 'red';

  lastPrice = price;
} 

let ws2 = new WebSocket('wss://stream.binance.com:9443/ws/btceur@trade')
let stockPriceElement2 = document.getElementById('stock-price2')
let lastPrice2 = null;
ws2.onmessage = (event) => {
  let stockObject2 = JSON.parse(event.data);
  let price2 = parseFloat(stockObject2.p).toFixed(2);
  stockPriceElement2.innerText = price2;
  stockPriceElement2.style.color = !lastPrice2 || lastPrice2 === price2 ? 'white' : price2 > lastPrice2 ? 'green' : 'red';
}

let ws3 = new WebSocket('wss://stream.binance.com:9443/ws/bnbeur@trade')
let stockPriceElement3 = document.getElementById('stock-price3')
let lastPrice3 = null;
ws3.onmessage = (event) => {
  let stockObject3 = JSON.parse(event.data);
  let price3 = parseFloat(stockObject3.p).toFixed(2);
  stockPriceElement3.innerText = price3;
  stockPriceElement3.style.color = !lastPrice3 || lastPrice3 === price3 ? 'white' : price3 > lastPrice3 ? 'green' : 'red';
}