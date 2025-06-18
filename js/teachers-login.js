let changeInput = document.querySelector(".change-img-input")
let changeImg = document.querySelector(".change-img")
let userName = document.querySelector(".user-name")
changeImg.src = "./images/profil.photo.png"
let user = JSON.parse(localStorage.getItem("data"))

// findedUser = JSON.parse(localStorage.getItem("user"))
// loginedUser.innerHTML = `${findedUser.firstname} ${findedUser.lastname}`

userName.textContent = user.username
console.log(userName);