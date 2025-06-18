let elForm = document.querySelector(".login-form")

elForm.addEventListener("submit", function(evt){
    evt.preventDefault()
    let data = {
        username:evt.target.username.value,
        password:evt.target.password.value
    }
    
    elForm.lastElementChild.innerHTML = `
        <img class="w-[30px] h-[30px] scale-[1.4] mx-auto" src="./images/loading.img" alt="Loading..." width="30" height="30">
    `
    let isUser = passwords.some(item => item.name == data.username && item.password == data.password)
    
    setTimeout(() => {
        elForm.lastElementChild.innerHTML = `Login`
        if(isUser){
            location.pathname = "/admin.html"
            localStorage.setItem("data", JSON.stringify(data))
        }
    },1000)
    
})