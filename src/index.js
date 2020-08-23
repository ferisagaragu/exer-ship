const { BrowserWindow, app } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
  });
  mainWindow.loadURL(`http://localhost:4200/`);
  mainWindow.on('closed', () => mainWindow = null);
});