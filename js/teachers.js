let changeInput = document.querySelector(".change-img-input")
let userInform = document.querySelector(".logined-user")
let changeImg = document.querySelector(".change-img")
changeImg.src = "./images/profil.photo.png"

let user = JSON.parse(localStorage.getItem("data"))

userName.textContent = user.username
console.log(userName);

changeInput.addEventListener("change", function (e) {
  changeImg.src = URL.createObjectURL(e.target.files[0])
   changeImg.className = "w-[100px] h-[100px] rounded-full mx-auto mb-[12px]"
})