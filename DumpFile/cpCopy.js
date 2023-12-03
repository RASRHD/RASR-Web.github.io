const papan = document.querySelector("#papan")

papan.appendChild(document.createElement("div")).setAttribute("id", "papan2")
const papand = document.querySelector("#papan2")

const ulAndStyle = () => {
    for (let i = 1; i <= 2; i++) {
        papand.appendChild(document.createElement("ul")).setAttribute("id", "ul"+i)
    }
    
    for (let i = 1; i <= 2; i++) {
        const ul = document.getElementById("ul"+i)
        ul.style.cssText += `
            box-sizing: border-box; 
            display: flex ;
            justify-content:center ;
            align-items: center;
            background-color: green;
        `
    }
}

const liAndStyle = (nomor) => {
    for (let i = 1; i <= 8; i++) {
        const ul = document.getElementById("ul"+nomor)
        ul.appendChild(document.createElement("li")).setAttribute("class", "lis")
    }    
}

ulAndStyle()
liAndStyle(1)
liAndStyle(2)