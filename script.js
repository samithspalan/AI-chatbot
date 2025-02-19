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
function showloading(){
    let html=`<div class="chatbot">
            <div class="img">
                <img src="chatbot.png" width="30">
            </div>
            
            <p class="text"></p>
            <img class="loading" src="load.gif" width="50">
        </div>`;
        let aibox= createchat(html,"chatbot"); 
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
