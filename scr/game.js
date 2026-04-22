import {FIGURES, TEXTURES} from "./config.js" 
import { randomElem } from "./utils.js"
import { Matrix, Figure } from "./support_classes.js"


class Game{     // SEPARATE FUCKING CLL!!!!
    constructor(){
        this.score = 0
        this.display = new Matrix({width:9, higth:9})
        this.display.randomFill([0])
        this.allowed_figures = [new Figure({form:[[0,0], [1,0], [0, 1], [1, 1]], color:2})]
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