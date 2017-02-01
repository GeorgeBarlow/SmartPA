const {app, BrowserWindow} = require('electron');

// Global reference of the window object.
let mainWindow;

// When Electron finish initialization, create window and load app index.html
app.on('ready', () => {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadURL(`file://${__dirname}/index.html`);
});
