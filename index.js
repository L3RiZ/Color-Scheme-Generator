const colorContainer = document.getElementById('color-container');

document.getElementById('get-scheme').addEventListener('submit', (e) => {
        e.preventDefault();
        
        colorContainer.innerHTML = ''

        fetch(`https://www.thecolorapi.com/scheme?hex=${document.getElementById('get-color').value.slice(1, 7)}&mode=${document.getElementById('modes').value}`)
            .then(response => response.json())
            .then(data => {
                data.colors.map(color => {
                    colorContainer.innerHTML += `
                    <div class="generated-color" id="${color.hex.clean}"></div>
                    <p class="hex-code">${color.hex.value}</p>`
                    document.getElementById(color.hex.clean).style.backgroundColor = color.hex.clean;
                })
            })
    })