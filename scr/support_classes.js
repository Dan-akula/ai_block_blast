import { FIGURES } from "./config.js"
import { randomElem } from "./utils.js"

export class Figure{
    constructor({form=[], color=0}={}){
        this.form = form
        this.color = color
    }

    randomaze(){
        this.form = randomElem(FIGURES)
        this.color = randomElem([1, 2, 3])
        this.rotate(randomElem[0, 90, 180, 270])
    }

    rotate(theta){
        switch (theta) {
            case 0:
                break
            case 90:
                this.form.map(elem => [-elem[1], elem[0]])
                break    
            case 180:
                this.form.map(elem => [-elem[0], elem[1]])
                break
            case 270:
                this.form.map(elem => [elem[1], -elem[0]])
                break
            default:
                return 'dumbass'
                break
        }
    }
}

export class Matrix{
    constructor({width, higth}){
        this.width = width;
        this.higth = higth;
        this.matrix = []
    }

    randomFill(content=[]){
        for (let x = 0; x < this.width; x ++){
            let line = []
            for (let y = 0; y < this.higth; y++){
                line.push(randomElem(content))
            }
            this.matrix.push(line)
        }
    }


    isAxYFull() {
        const result = new Array(9).fill(true);
        for (let col = 0; col < 9; col++) {
            for (let row = 0; row < 9; row++) {
                if (this.matrix[row][col] === 0) {
                    result[col] = false;         
                }
            }
        }
        return result;
    }

    isAxXFull() {
        const result = new Array(9).fill(true);

        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (this.matrix[row][col] === 0) {
                    result[row] = false;
                    break;
                }
            }
        }

        return result;
    }

    placeFigure({x, y, figure}){
        figure.form.forEach(peace => {
            console.log(peace, figure.color)

            this.matrix[y+peace[1]][x+peace[0]] = figure.color
        });
    }
}