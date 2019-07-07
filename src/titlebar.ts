import { remote, screen } from 'electron'

const curWindow = remote.getCurrentWindow()

const closeButtonEl = document.getElementById('closebutton')
const maximizeButtonEl = document.getElementById('maximizebutton')
const minimizeButtonEl = document.getElementById('minimizebutton')
const fullscreenButtonEl = document.getElementById('fullscreenbutton')

closeButtonEl.addEventListener('click', () => {
    curWindow.close()
})

maximizeButtonEl.addEventListener('click', () => {
    const [curWidth, curHeight] = curWindow.getSize()
    const {height, width} = screen.getPrimaryDisplay().workAreaSize
    const isMaximized = curHeight >= height && curWidth >= width

    console.log(curWidth, curHeight, width, height, isMaximized);
    

    if(isMaximized) {
        curWindow.unmaximize()
    } else {
        curWindow.maximize()
    }
})

minimizeButtonEl.addEventListener('click', () => {
    curWindow.minimize()
})


