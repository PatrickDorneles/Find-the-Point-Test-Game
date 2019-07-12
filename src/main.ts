import 'phaser'

import { remote } from 'electron'
import { userInfo } from 'os'

import { height, width } from '../config.js'

import { MainGameScene } from './scenes/MainGame';

class FindThePoint extends Phaser.Game {
    
    constructor(config: Phaser.Types.Core.GameConfig){
        super(config)

        this.scene.start('MainGame')

        
    }
    
}

window.onload = () => {
    
    var game = new FindThePoint({
        title: "FindThePoint",
        width,
        height: height - 30,
        parent: "game",
        backgroundColor: "#000000",
        scene: [
            MainGameScene
        ]
    })

    console.log(userInfo().username);

    const curWin = remote.getCurrentWindow()
    
    curWin.addListener('resize', () => {
        const [width,height] = curWin.getSize()

        game.scale.setGameSize(width,height-30)
    })

}    
