chrome.tabs.onUpdated.addListener((tabId, tab)=>{
    if(!tab || tab.url === undefined) return 

    if(tab.url.includes("youtube.com/watch")){
        // save a dictionary so that we don't operate on the same url again
        const queryParams =  tab.url.split("?")[1];
        const urlParams = new URLSearchParams(queryParams);

        chrome.tabs.sendMessage(tabId, {
            type: "NEW",
            videoId: urlParams.get("v")
        })
    }
});