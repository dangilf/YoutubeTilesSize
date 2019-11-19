
let root = document.getElementById('primary').firstChild;

function setStyleCount(count){ 
  localStorage.setItem('youtube.tiles-count', count);
  root.style.setProperty('--ytd-rich-grid-items-per-row', count);
}

root.addEventListener("DOMSubtreeModified", e => {
  var countValueOld=root.style.getPropertyValue('--ytd-rich-grid-items-per-row');
  var countValue=localStorage.getItem('youtube.tiles-count');
  if(countValueOld!=countValue)
  {
    root.style.setProperty('--ytd-rich-grid-items-per-row',countValue)
  }
});

chrome.runtime.onMessage.addListener( function(request, sender, sendResponse) {
  if(request.action == "SET"){
    setStyleCount(request.count);
  }
});