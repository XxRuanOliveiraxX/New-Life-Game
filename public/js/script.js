// Referência ao canvas
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Dimensões do canvas
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

// Dimensões de cada tile (bloco isométrico)
const tileWidth = 64;
const tileHeight = 32;

// Tamanho do grid (10x10)
const gridWidth = 10;  // Número de tiles na largura
const gridHeight = 10;  // Número de tiles na altura

// Centralizar o grid no canvas
const gridOffsetX = (canvasWidth - (gridWidth * tileWidth)) / 2;
const gridOffsetY = (canvasHeight - (gridHeight * tileHeight)) / 2;

// Posição inicial do "personagem"
let playerX = 5;
let playerY = 5;

// Função para transformar coordenadas 2D em coordenadas isométricas com deslocamento
function toIsometric(x, y) {
    const isoX = (x - y) * (tileWidth / 2) + gridOffsetX;
    const isoY = (x + y) * (tileHeight / 2) + gridOffsetY;
    return { x: isoX, y: isoY };
}

// Função para desenhar um tile (bloco) na posição isométrica
function drawTile(x, y) {
    const { x: isoX, y: isoY } = toIsometric(x, y);
    
    ctx.beginPath();
    ctx.moveTo(isoX, isoY);
    ctx.lineTo(isoX + tileWidth / 2, isoY + tileHeight / 2);
    ctx.lineTo(isoX, isoY + tileHeight);
    ctx.lineTo(isoX - tileWidth / 2, isoY + tileHeight / 2);
    ctx.closePath();
    ctx.strokeStyle = '#fff';  // Cor da linha
    ctx.stroke();  // Desenha as bordas do tile
}

// Função para desenhar um grid de tiles
function drawGrid(width, height) {
    for (let x = 0; x < width; x++) {
        for (let y = 0; y < height; y++) {
            drawTile(x, y);
        }
    }
}

// Função para desenhar o personagem
function drawPlayer() {
    const { x: isoX, y: isoY } = toIsometric(playerX, playerY);

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(isoX, isoY + tileHeight / 2, 10, 0, Math.PI * 2); // Um círculo simples como personagem
    ctx.fill();
}

// Função para limpar o canvas e redesenhar o grid e o personagem
function updateCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid(gridWidth, gridHeight);
    drawPlayer();
}

// Função para converter coordenadas cartesianas (mouse) para coordenadas de grid
function toGrid(x, y) {
    const gridX = Math.floor((x - gridOffsetX) / tileWidth + (y - gridOffsetY) / tileHeight);
    const gridY = Math.floor((y - gridOffsetY) / tileHeight - (x - gridOffsetX) / tileWidth);
    return { x: gridX, y: gridY };
}

// Adiciona evento de clique no canvas
canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const { x: newGridX, y: newGridY } = toGrid(mouseX, mouseY);

    // Verifica se o clique está dentro dos limites do grid
    if (newGridX >= 0 && newGridX < gridWidth && newGridY >= 0 && newGridY < gridHeight) {
        playerX = newGridX;
        playerY = newGridY;
        updateCanvas();  // Atualiza o canvas
    }
});

// Inicia o canvas desenhando o grid e o personagem
updateCanvas();
