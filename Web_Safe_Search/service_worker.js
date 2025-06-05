console.log("working perfectly service_worker !");
chrome.action.setBadgeText({text : "✔️"});
chrome.action.setBadgeBackgroundColor({color : "rgb(70, 206, 21)"});
chrome.runtime.onMessage.addListener(function (message ,sender ,sendResponse){
    function currentTAB() {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (tabs.length > 0) {
                chrome.tabs.remove(tabs[0].id); 
            }
        });
    }
    currentTAB();
    chrome.action.setBadgeText({text : message.reply});
    chrome.action.setBadgeBackgroundColor({color : "rgb(245, 0, 0)"});
    chrome.tabs.create({
        url: chrome.runtime.getURL("Warning.html"),
        active: true
    });
    setTimeout(()=>{
        chrome.action.setBadgeText({text : "✔️"});
        chrome.action.setBadgeBackgroundColor({color : "rgb(70, 206, 21)"});      
    },10000);
           
    });