(()=>{"use strict";({550:function(){var e=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function c(e){try{s(r.next(e))}catch(e){o(e)}}function d(e){try{s(r.throw(e))}catch(e){o(e)}}function s(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,d)}s((r=r.apply(e,t||[])).next())}))};chrome.runtime.onMessage.addListener((t=>{const{type:n,videoId:r}=t;"NEW"==n&&(t=>{e(void 0,void 0,void 0,(function*(){const e=document.querySelectorAll("div#description-inner")[0];if(!e)return;if(document.getElementById("yts-content"))return;const n=document.createElement("div");n.id="yts-content",n.innerText="Loading summary...",n.style.marginBottom="16px",e.prepend(n);try{const r=yield window.fetch(`http://127.0.0.1:8000/items/${t}`),i=yield r.text();if(!r)return;n.remove(),n.innerText=i,e.prepend(n)}catch(t){console.error(t),n.remove(),n.innerText="Error loading summary. Try refreshing the page.",e.prepend(n)}}))})(r)}))}})[550]()})();