let changeInput = document.querySelector(".change-img-input")
let userInform = document.querySelector(".logined-user")
let changeImg = document.querySelector(".change-img")
let logoutBtn = document.querySelector(".logout-btn")
changeImg.src = "./images/profil.photo.png"

let userName = document.querySelector(".user-name")
let data = localStorage.getItem("data")
let user = JSON.parse(data)

userName.textContent = user.username
document.querySelector('.logout').addEventListener("click", function(){
  window.location.href = "/index.html"
})




console.log(userName);

changeInput.addEventListener("change", function (e) {
  changeImg.src = URL.createObjectURL(e.target.files[0])
   changeImg.className = "w-[100px] h-[100px] rounded-full mx-auto mb-[12px]"
})


