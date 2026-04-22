import { TEXTURES, TABLE_SYMBOLS } from "./tiles.js";

const {horisontal_wall, vertical_wall, corners, lmid, rmid} = TABLE_SYMBOLS


export class Cllio{
    constructor(game_client){
        this.game = game_client

        this.width = 49;    // TIP: place only odd number
        this.higth = 20

        this.empty_line = ''    
        this.hor_lines = {top:"", mid:"", bot:""}
        this.br_gm = {left: "", right: ""}
        this.precreateTamplets()
    }

    precreateTamplets(){
        const mid_len = this.width-(corners.tl.length + corners.tr.length)
        const horiz_line =  horisontal_wall.repeat(mid_len)
        const gd_margin = (this.width - (9 * 3)) /2
        const hotbar_margin = (this.width/3 - vertical_wall.length - 15) / 2

        this.empty_line = `${lmid}${" ".repeat(mid_len)}${rmid}`

        this.hor_lines ={
            top: `${corners.tl}${horiz_line}${corners.tr}`,
            mid: `${lmid}${horiz_line}${rmid}`,
            bot: `${corners.bl}${horiz_line}${corners.br}`,
        }

        this.br_gm = {
            left: lmid + " ".repeat(gd_margin-lmid.length),
            right: " ".repeat(gd_margin-rmid.length) + rmid
        }
    }

    _getRendMatLine(work_arr){
        let line = ''
        
        for (let col = 0; col < work_arr.length; col++) {
            const pixel = work_arr[col];
            line += TEXTURES[pixel]
        }

        return line
    }

    _getRendHotbarLine(){
        
    }

    _renderHotbar() {
        const figures = this.game.allowed_figures;
        const lines = [];
        for (let y = -2; y <= 2; y++) {

            let line = '|';
            for (let idx = 0; idx < figures.length; idx++) {
                const figure = figures[idx];
                for (let x = -2; x <= 2; x++) {
                    if (figure.form.some(item => item[0] === x && item[1] === y)) {
                        line += TEXTURES[figure.color];
                    } else {
                        line += '   ';
                    }
                }
                line += '|';
            }
            lines.push(line);
        }
        return lines;
    }



    input(){

    }

    renderDisplay(){

        let game_matrix = this.game.display.matrix
        let display = [
        this.hor_lines.top,
        this.empty_line,
        ]

        for (let ind = 0; ind < 9; ind++) {
            display.push(`${this.br_gm.left}${this._getRendMatLine(game_matrix[ind])}${this.br_gm.right}`)
        }

        display.push(
            this.empty_line,
            this.hor_lines.mid)


        const hotbar = this._renderHotbar()

        hotbar.map(line => display.push(line))

        display.push(
            this.hor_lines.bot
        )

        return display.join("\n")
    }

    output(){
        let rendered_display = this.renderDisplay()
        console.log(rendered_display)
    }
}
