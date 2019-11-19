
let root = document.getElementById('primary').firstChild;

function setStyleSize(size){ 
  chrome.storage.sync.set({tilesSize: size}, function() {});  
  root.style.setProperty('--ytd-rich-grid-items-per-row', size);
}

root.addEventListener("DOMSubtreeModified", e => { 
  chrome.storage.sync.get(['tilesSize'], function(result) {
    if(result.tilesSize){    
      var sizeValueOld=root.style.getPropertyValue('--ytd-rich-grid-items-per-row');
      var sizeValue=result.tilesSize;
      if(sizeValueOld!=sizeValue)
      {
        root.style.setProperty('--ytd-rich-grid-items-per-row',sizeValue)
      }
    }    
  });     
  
});

chrome.storage.onChanged.addListener(function(changes, namespace) {  
  if(changes["tilesSize"] && changes["tilesSize"].newValue)
  {    
    setStyleSize(changes["tilesSize"].newValue);
  }
});