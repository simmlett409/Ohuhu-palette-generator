// script.js
document.getElementById('paletteForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const markerCount = parseInt(document.getElementById('markerCount').value);
    const paletteType = document.getElementById('paletteType').value;

    const palette = generatePalette(markerCount, paletteType);
    displayPalette(palette);
});

function generatePalette(count, type) {
    const palettes = {
        cool: ['#A2D5F2', '#40A8C4', '#07689F', '#FF7E67', '#F9F9F9'],
        warm: ['#FF6F61', '#FFA577', '#FFD166', '#EF476F', '#F9F9F9'],
        similar: ['#6A4C93', '#7B68EE', '#9370DB', '#8A2BE2', '#F9F9F9'],
        pastel: ['#FFD1DC', '#FFA8A8', '#FFCC99', '#B2F2BB', '#F9F9F9'],
        '80s': ['#FF6F61', '#FFD700', '#00CED1', '#FF1493', '#F9F9F9'],
        '90s': ['#8A2BE2', '#00FF7F', '#FF4500', '#1E90FF', '#F9F9F9'],
        popular: ['#FF6F61', '#6B5B95', '#88B04B', '#FFA500', '#F9F9F9']
    };

    const selectedPalette = palettes[type] || palettes.cool;
    const generatedPalette = [];

    for (let i = 0; i < count; i++) {
        const color = selectedPalette[i % selectedPalette.length];
        generatedPalette.push(color);
    }

    return generatedPalette;
}

function displayPalette(palette) {
    const paletteDisplay = document.getElementById('paletteDisplay');
    paletteDisplay.innerHTML = '';

    palette.forEach(color => {
        const colorBox = document.createElement('div');
        colorBox.className = 'color-box';
        colorBox.style.backgroundColor = color;
        colorBox.textContent = color;
        paletteDisplay.appendChild(colorBox);
    });
}
