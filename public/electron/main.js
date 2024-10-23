const { app, BrowserWindow } = require('electron');

function createWindow() {
    const win = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('html/game.html');  // Carrega a página do jogo

    // Maximiza a janela e a coloca em fullscreen
    win.maximize();            // Maximiza a janela
    win.setFullScreen(true);    // Coloca em modo tela cheia
    win.focus();                // Garante que a janela receba foco
}

app.whenReady().then(() => {
    createWindow();

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
