const TEXTURES = ["[ ]", '[#]', '[%]', '[$]']


function rotateFigure(arr, r){
    arr = arr.map(elem =>{
        switch (r) {
            case 0:
                return elem
            case 1:
                return [-elem[1], elem[0]]
            case 2:
                return [-elem[0], elem[1]]
            case 3:
                return [elem[1], -elem[0]]
        }
    })
    console.log(arr)
    return arr
}

function randomElem(arr) {
    if (arr.length == 1){
        return arr[0]
    }
    if (arr.length == 0){
        return
    }
    return arr[Math.floor(Math.random() * arr.length)]
}

class Matrix{
    constructor({width, higth}){
        this.width = width;
        this.higth = higth;
        this.matrix = []
    }

    randomFill(content=[]){
            console.log(randomElem([0, 1, 2]))

        for (let x = 0; x < this.width; x ++){
            let line = []
            for (let y = 0; y < this.higth; y++){
                line.push(randomElem(content))
            }
            this.matrix.push(line)
        }
    }

    isAxYFull(){
        let res = []
        for (const y of this.matrix){
            let line = 0
            for (const x of y){
                if (! y != 0){
                    continue
                }
                line +=1 
            }
            res.push(line === 9)
        }
        return(res)
    }

    isAxXFull(){
        let res = []
        for (const y of this.matrix){
            let line = 0
            for (const x of y){
                if (! x != 0){
                    continue
                }
                line +=1 
            }
            res.push(line === 9)
        }
        return(res)
    }

    placeFigure(x, y, r, cont, figure){
        figure = rotateFigure(figure, r)
        figure.forEach(peace => {
            this.matrix[y+peace[1]][x+peace[0]] = cont
        });
    }
}

class Game{
    constructor(){
        this.score = 0
        this.display = new Matrix({width:9, higth:9})
        this.display.randomFill([0])
    }

    cllRender(){
        let display = this.display.matrix
        for (const y of display){
            for (const x of y){
                process.stdout.write(TEXTURES[x%TEXTURES.length])
            }
            process.stdout.write("\n")
        }
    }
    
}

export default Game