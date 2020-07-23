const express = require('express');
const electron = require('electron');
const path = require('path')
const webapp = express();
const { app, BrowserWindow } = require('electron')

let win;

function createWindow () {   
  // 创建浏览器窗口
  win = new BrowserWindow({
    width: 1000,
    height: 800,
    frame: false,
    resizable: true,
    transparent: true,
    skipTaskbar: false,
    fullscreen: true,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // 加载index.html文件
  win.loadFile('desktop.html');
  win.setIgnoreMouseEvents(true);
  win.setAlwaysOnTop(true);
}

app.whenReady().then(createWindow);

webapp.use(express.static(path.join(__dirname, 'public')));
webapp.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
  });

webapp.get('/senddanmaku',function(req,res){
    var result = req.query.content;
    var command = 'damoo.emit({ text: "'+result+'", color: "#FFF"});'
    win.webContents.executeJavaScript(command);
    res.send('OK');
  });

var server = webapp.listen(8025, function () {
    console.log("port at 8025")
  })