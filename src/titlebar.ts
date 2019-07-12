import { remote, screen } from 'electron'

const curWindow = remote.getCurrentWindow()

const closeButtonEl = document.getElementById('closebutton')
const minimizeButtonEl = document.getElementById('minimizebutton')

closeButtonEl.addEventListener('click', () => {
    curWindow.close()
})

minimizeButtonEl.addEventListener('click', () => {
    curWindow.minimize()
})


