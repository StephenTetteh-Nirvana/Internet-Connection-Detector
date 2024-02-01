const url = "https://jsonplaceholder.typicode.com/posts"

const notificationBox = document.querySelector(".notificationBox")
let title = notificationBox.querySelector(".title")
let subtitle = notificationBox.querySelector(".subtitle")
let iconBox = notificationBox.querySelector(".icon-box")


const checkStatus = async () =>{
    try{
        const response = await fetch(url)
        return response;
    }
    catch(error){
        console.log("offline")
        offline()
    }
   
}
setInterval(async()=>{
    try{
       const response = await checkStatus()
       handleResponse(response)
    }
    catch(error){
        console.log(error)
    }
    
},3000)

function handleResponse(response) {
    console.log(response);
    console.log(response.status, "Good Connection");
    if (response.status === 200 && response.status < 400) {
      online();
    }
  }


function online(){
    notificationBox.innerHTML = `<div class="icon-box">
    <i class="uil uil-wifi"></i>
</div>
    <div class="info-box">
        <p class="title">You are online now</p>
        <p class="subtitle">Connection Succesful!</p>
    </div>

    <div class="closeIcon-box">
        <i class="uil uil-multiply"></i>
    </div>`

    notificationBox.classList.remove("offline")
    setTimeout(()=>{
        notificationBox.classList.add("hide")
    },5000)
}

function offline(){
    notificationBox.classList.remove("hide")
    notificationBox.innerHTML = ""
   notificationBox.innerHTML = `  <div class="icon-box">
                                     <i class="uil uil-wifi-slash"></i>
                                    </div>
                                    <div class="info-box">
                                        <p class="title">You are offline now</p>
                                        <p class="subtitle">Connection Failed!</p>
                                    </div>

                                    <div class="closeIcon-box">
                                       <i class="uil uil-multiply"></i>
                                    </div>`
   notificationBox.classList.add("offline")
}


notificationBox.addEventListener("click",(e)=>{
    if(e.target.classList.contains("uil-multiply")){
        notificationBox.classList.add("hide")
    }
})