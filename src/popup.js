let inputCount=document.getElementById("tiles-count");
let buttonSet=document.getElementById("set-count");


window.onload = function() {
    console.log(localStorage.getItem('youtube.tiles-count'));
    if(!localStorage.getItem('youtube.tiles-count')){
        localStorage.setItem('youtube.tiles-count',4)
    }
    inputCount.value=localStorage.getItem('youtube.tiles-count')
}


buttonSet.onclick = function(element) {
    var value=inputCount.value;   
    if(value){
        localStorage.setItem('youtube.tiles-count',value)
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, {action: "SET", count: value}, function(response) {});
        });
    }    
}


