let prompt=document.querySelector(".prompt");
let container=document.querySelector(".container");
let btn=document.querySelector(".btn");
let chatContainer=document.querySelector(".chatContainer");
let userMessage=null;
let Api_url=;

function createchat(html, classname) {
    let div = document.createElement("div");
    div.className = classname; 
    div.innerHTML = html.trim();
    return div;
}

async function  getapiResponse(aibox) {
     let text=aibox.querySelector(".text");
    try{
   let response=await  fetch(Api_url,{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
        contents: [{
            "role":"user",
            "parts":[{text: userMessage}]
            }]
    })
   })
   let data=await response.json();
   let apirequest=data?.candidates[0].content.parts[0].text;
   text.innerText=apirequest;
    }catch(error){
        console.log(error);

    }
    finally{
       aibox.querySelector(".loading").style.display="none";
    }
    
}
function showloading() {
    let chatbotHtml = `
        <div class="img">
            <img src="chatbot.png" width="30">
        </div>
        <p class="text"></p>
        <img class="loading" src="load.gif" width="50">
    `;

    let aibox = createchat(chatbotHtml, "chatbot");
    chatContainer.appendChild(aibox);
    
    getapiResponse(aibox);
}

btn.addEventListener("click", () => {
    userMessage = prompt.value.trim();
     container.style.display = "none"; 

    let userHtml = `<div class="img">
                        <img src="icons.png" width="30">
                    </div>
                    <p class="text">${userMessage}</p>`;
    let userbox = createchat(userHtml, "user");
    chatContainer.appendChild(userbox);
    prompt.value = ""; 
    setTimeout(showloading, 500);
});
