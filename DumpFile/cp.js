//awal
const papan = document.querySelector("#papan")
//dalem
papan.appendChild(document.createElement("div")).setAttribute("id", "papan2")
//coba aja
function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}
//bikin ul+style
const ulAndStyle = (nomor) => {
    const papand = document.querySelector("#papan2")
    papand.appendChild(document.createElement("ul")).setAttribute("id", "ul" + nomor)

    const ul = document.getElementById("ul" + nomor)
    setAttributes(ul, { "class": "apakek" })

    ul.style.cssText += `
        box-sizing: border-box; 
        display: flex ;
        justify-content:center ;
        align-items: center;
        background-color: green;
    `
}
//bikin li wae
const liWae = (nomor) => {
    let a = nomor * 8 - 8
    for (let i = 1; i <= 8; i++) {
        let b = a + i
        const ul = document.getElementById("ul" + nomor)
        ul.appendChild(document.createElement("li")).setAttribute("id", "li" + b)
    }
}
//li Style
const liStyle = (number) => {
    let a = number * 8 - 8
    for (let i = a + 1; i <= a + 8; i++) {
        const li = document.getElementById("li" + i)
        li.style.cssText += `
            margin=right: 10px;
            list-style: none;
            width: 5vw;
            height: 5vh;
        `
        let b = i + number
        if (b % 2 == 0) {
            li.style.cssText += "background-color: black;"
            li.style.cssText += "color : black"
        } else {
            li.style.cssText += "background-color: white;"
            li.style.cssText += "color : white"
        }
    }
}
//jumlah baris
let baris = 8
for (let i = 1; i <= baris; i++) {
    ulAndStyle(i)
    liWae(i)
    liStyle(i)
}
//clickcounter
localStorage.clear()
for (let i = 1; i <= 64; i++) {
    localStorage.setItem("liJc"+i, "1")
    let liJc = localStorage.getItem("liJc"+i)
    let liJcF = parseInt(liJc)
    localStorage.setItem("id", "")
    const liSekarang = document.getElementById("li" + i)
    liSekarang.addEventListener("click", () => {
        console.log(liJcF) //ada
        if (liJcF % 2 == 0) {
            if (liSekarang.style.color == "white") {
                liSekarang.style.backgroundColor = "white"
            } else {
                liSekarang.style.backgroundColor = "black"
            }
            liJcF -= 1
        } else {
            // console.log(localStorage.getItem("id")) //ada
            liSekarang.style.backgroundColor = "red"
            localStorage.setItem("id", liSekarang.attributes.id.value)
            const liSebelumnnya = document.getElementById(localStorage.getItem("id"))
            if (localStorage.getItem("id") == "") {
                liJcF += 1
            } else if (localStorage.getItem("id") !== "") {
                // console.log(liSebelumnnya.style.backgroundColor) //ada
                if (liSebelumnnya.style.backgroundColor == "red") {
                    if (liSebelumnnya.style.color == "white") {
                        liSebelumnnya.style.backgroundColor = "white"
                    } else {
                        liSebelumnnya.style.backgroundColor = "black"
                    }
                    liJcF += 1 
                }
            }
        }
        console.log(liJcF) //ada
        localStorage.setItem("liJc"+i, liJcF)
    })
}
console.log("asu")