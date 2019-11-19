let inputSize=document.getElementById("tiles-size-input");
let buttonSet=document.getElementById("tiles-size-button");


window.onload = function() {
    chrome.storage.sync.get(['tilesSize'], function(result) {        
        var tilesSize=result.tilesSize;
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
        chrome.storage.sync.set({tilesSize: value}, function() {});
    }    
}


