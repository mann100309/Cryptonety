var btc = document.getElementById("bitcoin");
var etc = document.getElementById("ethereum");
var doge = document.getElementById("dogecoin");

var settings = {
    "async": true,
    "scrossDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=inr",
    "method": "GET",
    "Headers": {}
}
$.ajax(settings).done(function (response){
    btc.innerHTML = response.bitcoin.inr;
    etc.innerHTML = response.ethereum.inr;
    doge.innerHTML = response.dogecoin.inr;
});