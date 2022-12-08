const btn = document.querySelector('button')
const body = document.querySelector('body')

function changeBackground(){
    let red = Math.floor(Math.random() * (225 - 0) + 0)
    let green = Math.floor(Math.random() * (225 - 0) + 0)
    let blue = Math.floor(Math.random() * (225 - 0) + 0)

    let red1 = Math.floor(Math.random() * (225 - 0) + 0)
    let green1 = Math.floor(Math.random() * (225 - 0) + 0)
    let blue1 = Math.floor(Math.random() * (225 - 0) + 0)

    let red2 = Math.floor(Math.random() * (225 - 0) + 0)
    let green3 = Math.floor(Math.random() * (225 - 0) + 0)
    let blue4 = Math.floor(Math.random() * (225 - 0) + 0)

    let color1 = `rgb(${red2}, ${green}, ${blue1})`
    let color2 = `rgb(${red1}, ${green3}, ${blue4})`
    let color3 = `rgb(${red}, ${green1}, ${blue})`

    body.style.background = `linear-gradient( 45deg, ${color1}, ${color2} 30%, ${color3})`
}

btn.addEventListener('click', changeBackground)
changeBackground()