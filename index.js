let homeBasket=document.getElementById("homebasket")
let addHome=0
function addHomeOne(){
    addHome=addHome+1
  homeBasket.textContent=addHome
}
function addHomeTwo(){
    addHome=addHome+2
    homeBasket.textContent=addHome
}
function addHomeThree(){
    addHome=addHome+3
    homeBasket.textContent=addHome
}
let guestBasket=document.getElementById("guestbasket")
let addGuest=0
function addGuestOne(){
    addGuest=addGuest+1
    guestBasket.textContent=addGuest
}
function addGuestTwo(){
    addGuest=addGuest+2
    guestBasket.textContent=addGuest
}
function addGuestThree(){
    addGuest=addGuest+3
    guestBasket.textContent=addGuest
}