let prompt=document.querySelector(".prompt");
let btn=document.querySelector(".btn");
let chatContainer=document.querySelector(".chatContainer");
let userMessage=null;
function createchat(html,classname){
    let div=document.createElement("div");
    div.classList.add(classname);
    div.innerHTML=html;
    return div;
}

btn.addEventListener('click',()=>{
    userMessage=prompt.value;
    if(!userMessage)return;
    let html=` <div class="user">
    <div class="img">
            <img src="icons.png" width="50">
            </div>
            <p class="text"></p>
        </div>`
     let userbox= createchat(html,"user");  
     userbox.querySelector(".text").innerText =userMessage;
     chatContainer.appendChild(userbox);
     prompt.value="";

})
