import {FIGURES, TEXTURES} from "./config.js" 
import { randomElem } from "./utils.js"
import { Matrix, Figure } from "./support_classes.js"




class Game{
    constructor(){
        this.score = 0
        this.display = new Matrix({width:9, higth:9})
        this.display.randomFill([0])
        this.allowed_figures = [[0,0], [1,0], [0, 1], [1, 1]]
    }

    cllRender(){
        let display = this.display.matrix
        for (const y of display){
            for (const x of y){
                process.stdout.write(TEXTURES[x%TEXTURES.length])
            }
            process.stdout.write("\n")
        }
        process.stdout.write("\n")

        for (let index = 0; index < this.allowed_figures.length; index++) {
            const figure = this.allowed_figures[index];
            for (let y = -2; y < 3; y++) {
                for (let x = -2; x < 3; x++) {
                    if (figure[0] == x & figure[1] == y){
                        process.stdout.write(TEXTURES[x%TEXTURES.length])

                    }
                }
            }
        }   
    }

    checkClear(){
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

    
}

export default Game