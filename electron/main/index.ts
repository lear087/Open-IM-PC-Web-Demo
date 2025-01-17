import { app } from "electron";
import { createMainWindow } from "./windowManage";
import { createTray } from "./trayManage";
import { setIpcMainListener } from "./ipcHandlerManage";
import { setAppGlobalData, setAppListener, setSingleInstance } from "./appManage";
import createAppMenu from "./menuManage";
import { isLinux } from "../utils";

const init = () => {
  createMainWindow();
  createAppMenu();
  createTray();
};

setAppGlobalData();
setIpcMainListener();
setSingleInstance();
setAppListener(init);

app.whenReady().then(() => {
  isLinux ? setTimeout(init, 300) : init();
});
