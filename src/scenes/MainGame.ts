import 'phaser'

import { Lifecycle } from '../utils/Lifecycle';
import { remote } from 'electron';

export class MainGameScene extends Phaser.Scene implements Lifecycle {
    
    title: Phaser.GameObjects.Text;
    goalText: Phaser.GameObjects.Text;
    scoreText: Phaser.GameObjects.Text;
    
    goal: {
        x: number, 
        y: number
    };

    score: number;

    constructor() {
        super({ key: 'MainGame' })
    }

    create() {

        const curWin = remote.getCurrentWindow()
        const [winWidth, winHeight] = curWin.getSize()

        const title = "Find the point"
        
        this.title = this.add.text(
            (winWidth/2), 100, 
            title, 
            { fontSize: '46px', fill: '#ffffff' }
        )

        this.title.setOrigin(0.5,0.5)

        this.title.setInteractive()

        this.goal = {
            x: this.genRandomNumber(winWidth),
            y: this.genRandomNumber(winHeight-30)
        }

        this.goalText = this.add.text(
            (winWidth/2), 150, 
            `Your goal is x: ${this.goal.x} and y: ${this.goal.y} `, 
            { fontSize: '24px', fill: '#ffffff' }
        )

        this.goalText.setOrigin(0.5,0.5)

        this.score = 0

        this.scoreText = this.add.text(
            (winWidth/2), 500,
            `Score: ${this.score}`,
            { fontSize: '18px', fill: '#ffffff' }
        )

        this.scoreText.setOrigin(0.5,0.5)

        this.add.text(
            winWidth/2,
            525,
            'Press R to reload goal',
            { fontSize: '18px', fill: '#ffffff' }
        ).setOrigin(0.5,0.5)

    }

    init() {
        const curWin = remote.getCurrentWindow()
        const [winWidth, winHeight] = curWin.getSize()

        this.input.on(Phaser.Input.Events.POINTER_DOWN, (pointer: Phaser.Input.Pointer, gameObj: Phaser.GameObjects.GameObject ) => {

            this.title.setText(`x: ${pointer.x} y: ${pointer.y}`)

            if(pointer.x === this.goal.x && pointer.y === this.goal.y) {
                    
                this.title.setText(`Congratulations! :D`)

                this.goal = {
                    x: this.genRandomNumber(winWidth),
                    y: this.genRandomNumber(winHeight-30)
                }

                this.goalText.setText(`Your new goal is x: ${this.goal.x} and y: ${this.goal.y} `) 

                this.score++

                this.scoreText.setText(`Score: ${this.score}`)

            }

        })

        this.input.keyboard.on(Phaser.Input.Keyboard.Events.ANY_KEY_UP, (key: Phaser.Input.Keyboard.Key) => {
            if(key.keyCode === 82) {

                this.goal = {
                    x: this.genRandomNumber(winWidth),
                    y: this.genRandomNumber(winHeight-30)
                }

                this.goalText.setText(`Your new goal is x: ${this.goal.x} and y: ${this.goal.y} `) 

            }
        })
    }

    genRandomNumber(max: number) {
        const random = Math.random()
        return Math.floor((random * max) + 1)
    }

    

}