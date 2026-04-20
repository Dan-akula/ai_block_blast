import {FIGURES, TEXTURES} from "./config.js" 
import { randomElem } from "./utils.js"
import { Matrix, Figure } from "./support_classes.js"

class Game{
    constructor(){
        this.score = 0
        this.display = new Matrix({width:9, higth:9})
        this.display.randomFill([0])
        this.allowed_figures = [new Figure({form:[[0,0], [1,0], [0, 1], [1, 1]], color:1})]
    }

    _renderDisplay(){

        let display = this.display.matrix
        for (const y of display){
            process.stdout.write("          ")
            for (const x of y){
                process.stdout.write(TEXTURES[x])
            }
            process.stdout.write("\n")
        }
        process.stdout.write("\n")

    }

    _renderHotbar() {
        const figures = this.allowed_figures

        for (let y = -2; y <= 2; y++) {
            let line = ''
            for (let idx = 0; idx < figures.length; idx++) {
                const figure = figures[idx]
                for (let x = -2; x <= 2; x++) {
                    if (figure.form.some(item => item[0] === x && item[1] === y)) {
                        line += TEXTURES[figure.color]
                    } else {
                        line += '   '
                    }
                }
                line += ' '
            }
            process.stdout.write(line + '\n')
        }
    }

    cllRender(){
        this._renderDisplay()
        console.log("")
        this._renderHotbar()
        console.log("")
    }

    checkClear(){           // remove second for, please
        let res = []
        
        let y_ax = this.display.isAxYFull()
        let x_ax = this.display.isAxXFull()
    

        for (let x = 0; x < x_ax.length; x++) {
            for (let y = 0; y < 9; y++) {
                if (x_ax[x]){
                    res.push([y, x])
                }
            }
        }

        for (let y = 0; y < y_ax.length; y++) {
            for (let x = 0; x < 9; x++) {
                if (y_ax[y]){
                    res.push([y, x])
                }
            }
        }

        return [...new Set(res)]
    }

    confirmMove(){
        let clear_spot = this.checkClear()
        this.score += clear_spot.length
        this.display.placeFigure({x:0, y:0, figure:clear_spot})
    }
    
    getFigures(){
        this.allowed_figures = [new Figure(), new Figure(), new Figure]
        this.allowed_figures.map(fig => fig.randomaze())
        return this.allowed_figures
    }
}

export default Game