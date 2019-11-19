let inputSize=document.getElementById("tiles-size-input");
let buttonSet=document.getElementById("tiles-size-button");


window.onload = function() {
    var tilesSize;
    chrome.storage.sync.get(['tilesSize'], function(result) {        
        tilesSize=result.tilesSize;
        if(!result.tilesSize)
        {
            chrome.storage.sync.set({tilesSize: 4}, function() {});
            tilesSize=4;
        }
        inputSize.value=tilesSize
    });    
}


buttonSet.onclick = function(element) {
    var value=inputSize.value;   
    if(value){
        console.log(value);
        chrome.storage.sync.set({tilesSize: value}, function() {});
    }    
}


