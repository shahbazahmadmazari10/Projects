console.log("working perfectly!");
window.onload = function(){
    let msg = "✖️";
    chrome.runtime.sendMessage({type : "red", reply : msg});
}
