const colorContainer = document.getElementById('colors-container');
const hexIDs = [];

document.getElementById('get-scheme').addEventListener('submit', (e) => {
        e.preventDefault();
        colorContainer.innerHTML = ''
        generateColors()
    })

function generateColors() {
    fetch(`https://www.thecolorapi.com/scheme?hex=${document.getElementById('get-color').value.slice(1, 7)}&mode=${document.getElementById('modes').value}`)
            .then(response => response.json())
            .then(data => {           
                data.colors.map(color => {
                colorContainer.innerHTML += `
                <div class="color-container" id="color-container">
                    <div class="generated-color" id="${color.hex.clean}"></div>
                    <p class="hex-code">${color.hex.value}</p>
                </div>`
                document.getElementById(color.hex.clean).style.backgroundColor = color.hex.clean;
                hexIDs.push(color.hex.clean)
        })
    })
}

document.addEventListener('click', (e) => {
    if(hexIDs.includes(e.target.id)) {
        navigator.clipboard.writeText("#" + e.target.id);
    } else if (hexIDs.includes(e.target.innerHTML.slice(1, 7))) {
        navigator.clipboard.writeText(e.target.innerHTML);
    }
})

generateColors();