const fortuneCookie = document.querySelector("#cookie1")
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnReset = document.querySelector("button")
const fortuneMessage = document.querySelector("#fortuneMessage")

fortuneCookie.addEventListener("click", openCookie)
btnReset.addEventListener("click", cookieReset)
document.addEventListener("keypress", handleEnt

async function openCookie() {
  screenToggle()

  try {
    const response = await fetch("http://ad7781e7bb03648c49fad4a35743cb16-1094069569.us-east-1.elb.amazonaws.com:3000/frase")

    const data = await response.json()

    fortuneMessage.innerText = data.mensagem
  } catch (error) {
    fortuneMessage.innerText =
      "Não foi possível carregar sua sorte 😢"
  }
}

function cookieReset() {
  screenToggle()
}

function screenToggle() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleEnter(event) {
  if (
    event.key == "Enter" &&
    screen2.classList.contains("hide")
  ) {
    openCookie()
  } else if (
    event.key == "Enter" &&
    screen1.classList.contains("hide")
  ) {
    cookieReset()
  }
}