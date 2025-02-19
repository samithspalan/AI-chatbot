let prompt=document.querySelector(".prompt");
let btn=document.querySelector(".btn");
let chatContainer=document.querySelector(".chatContainer");
let userMessage=null;
let Api_url=;
function createchat(html,classname){
    let div=document.createElement("div");
    div.classList.add(classname);
    div.innerHTML=html;
    return div;
}
async function  getapiResponse(aibox) {
    try{

    }catch{

    }
    
}
function showloading(){
    let html=`<div class="chatbot">
            <div class="img">
                <img src="chatbot.png" width="30">
            </div>
            
            <p class="text"></p>
            <img class="loading" src="load.gif" width="50">
        </div>`;
        let aibox= createchat(html,"chatbot"); 
        // aibox.querySelector(".text").innerText;
        chatContainer.appendChild(aibox);
        getapiResponse(aibox);
    

}
btn.addEventListener('click',()=>{
    userMessage=prompt.value;
    if(!userMessage)return;
    let html=` <div class="user">
    <div class="img">
            <img src="icons.png" width="30">
            </div>
            <p class="text"></p>
        </div>`
     let userbox= createchat(html,"user");  
     userbox.querySelector(".text").innerText =userMessage;
     chatContainer.appendChild(userbox);
     prompt.value="";
    setTimeout(showloading,500);
})
