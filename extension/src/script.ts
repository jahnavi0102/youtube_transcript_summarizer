(()=>{
    const getSummary = async (videoId: string) => {
        const description = document.querySelectorAll("div#description-inner")[0]
        if(!description) return
        if(document.getElementById("yts-content")) return

        const container = document.createElement("div");
        container.id = "yts-content";
        container.innerText = "Loading summary...";
        container.style.marginBottom = "16px";

        description.prepend(container);
        
        try{
            const data = await window.fetch(`http://127.0.0.1:8000/items/${videoId}`);
            const text = await data.text();
            if(!data) return;

            container.remove();
            container.innerText = text;
            description.prepend(container);
        }catch(e){
            console.error(e)
            container.remove();
            container.innerText = "Error loading summary. Try refreshing the page.";
            description.prepend(container);
        }
    }

    chrome.runtime.onMessage.addListener((obj)=>{
        const {type, videoId} = obj
        if( type == "NEW"){
           getSummary(videoId);
        }
    })
})()