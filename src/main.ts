import 'phaser'

import { remote } from 'electron'
import { userInfo } from 'os'

import { height, width } from '../config.js'

class GenericRPG extends Phaser.Game {
    
    constructor(config: Phaser.Types.Core.GameConfig){
        super(config)
    }
    
}

window.onload = () => {
    
    var game = new GenericRPG({
        title: "GenericRPG",
        width,
        height: height - 30,
        parent: "game",
        backgroundColor: "#18216D"
    })

    console.log(userInfo().username);

    const curWin = remote.getCurrentWindow()
    
    curWin.addListener('resize', () => {
        const [width,height] = curWin.getSize()

        game.scale.setGameSize(width,height-30)
    })
    
}    
