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
            list-style: none;
            width: 70px;
            height: 70px;
        `
        let b = i + number
        if (b % 2 == 0) {
            li.style.cssText += "background-color: white;"
            li.style.cssText += "color : white"
        } else {
            li.style.cssText += "background-color: black;"
            li.style.cssText += "color : black"
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
//clickall
localStorage.clear()
localStorage.setItem("idSekarang", "")
localStorage.setItem("idSebelumnya", "")
let pionHitam = []
let pionPutih = []
let blockDepanKeSatuHitam = []
let blockDepanKeDuaHitam = []
let blockDepanKeSatuPutih = []
let blockDepanKeDuaPutih = []
for (let i = 1; i <= 64; i++) {
    const liSekarang = document.getElementById("li" + i)
    liSekarang.addEventListener("click", () => {
        if (localStorage.getItem("idSekarang") !== "") {
            liSebelumnya = document.getElementById(localStorage.getItem("idSebelumnya"))
            localStorage.setItem("idSekarang", liSekarang.attributes.id.value)
        } else {
            localStorage.setItem("idSekarang", liSekarang.attributes.id.value)
            liSebelumnya = document.getElementById(localStorage.getItem("idSekarang"))
            localStorage.setItem("idSebelumnya", liSekarang.attributes.id.value)
        }
        console.log("Id Sebelumnya: "+liSebelumnya.attributes.id.value)
        console.log("Id Sekarang: "+liSekarang.attributes.id.value)
        if (liSekarang.style.backgroundColor !== "red") {
            liSekarang.style.backgroundColor = "red"
            if (liSebelumnya.attributes.id.value !== liSekarang.attributes.id.value) {
                liSebelumnya.style.backgroundColor = liSebelumnya.style.color
            }
        } else {
            liSekarang.style.backgroundColor = liSekarang.style.color
        }
        localStorage.setItem("idSebelumnya", liSekarang.attributes.id.value)
        console.log("================================================")
    })
}
//pion
let temp = ""
for (let i = 9; i <= 16; i++) {
    pionHitam[i] = document.getElementById("li" + i)
    pionPutih[i] = document.getElementById("li" + (i + 40))
    pionHitam[i].addEventListener("click", () => {
        blockDepanKeSatuHitam[i] = document.getElementById("li" + (i + 8))
        blockDepanKeDuaHitam[i] = document.getElementById("li" + (i + 16))
        if (pionHitam[i].style.backgroundColor == "red") {
            blockDepanKeSatuHitam[i].style.backgroundColor = "red"
            blockDepanKeDuaHitam[i].style.backgroundColor = "red"
            if (temp!==i && temp !== "") {
                blockDepanKeSatuPutih[temp].style.backgroundColor = blockDepanKeSatuPutih[temp].style.color
                blockDepanKeDuaPutih[temp].style.backgroundColor = blockDepanKeDuaPutih[temp].style.color
            }
            temp = i
        } else {
            blockDepanKeSatuHitam[i].style.backgroundColor = blockDepanKeSatuHitam[i].style.color
            blockDepanKeDuaHitam[i].style.backgroundColor = blockDepanKeDuaHitam[i].style.color
        }
    })
    pionPutih[i].addEventListener("click", () => {
        blockDepanKeSatuPutih[i] = document.getElementById("li" + (i + 32))
        blockDepanKeDuaPutih[i] = document.getElementById("li" + (i + 24))
        if (pionPutih[i].style.backgroundColor == "red") {
            blockDepanKeSatuPutih[i].style.backgroundColor = "red"
            blockDepanKeDuaPutih[i].style.backgroundColor = "red"
            if (temp!==i && temp !== "") {
                blockDepanKeSatuPutih[temp].style.backgroundColor = blockDepanKeSatuPutih[temp].style.color
                blockDepanKeDuaPutih[temp].style.backgroundColor = blockDepanKeDuaPutih[temp].style.color
            }
            temp = i
        } else {
            blockDepanKeSatuPutih[i].style.backgroundColor = blockDepanKeSatuPutih[i].style.color
            blockDepanKeDuaPutih[i].style.backgroundColor = blockDepanKeDuaPutih[i].style.color
        }
    })
}
//selain pion
for (let i = 1; i <= 64; i++) {
    if (i == 9) {
        i+=48
    }
    const kotak = document.getElementById("li" + i)
    for (let j = 9; j <= 16; j++) {
        kotak.addEventListener("click", () => {
            blockDepanKeSatuHitam[j] = document.getElementById("li" + (j + 8))
            blockDepanKeDuaHitam[j] = document.getElementById("li" + (j + 16))
            blockDepanKeSatuHitam[j].style.backgroundColor = blockDepanKeSatuHitam[j].style.color
            blockDepanKeDuaHitam[j].style.backgroundColor = blockDepanKeDuaHitam[j].style.color
        })

        kotak.addEventListener("click", () => {
            blockDepanKeSatuPutih[j] = document.getElementById("li" + (j + 32))
            blockDepanKeDuaPutih[j] = document.getElementById("li" + (j + 24))
            blockDepanKeSatuPutih[j].style.backgroundColor = blockDepanKeSatuPutih[j].style.color
            blockDepanKeDuaPutih[j].style.backgroundColor = blockDepanKeDuaPutih[j].style.color
        })
    }
}

console.log("asu")