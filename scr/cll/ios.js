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

    _getRendGameLine(ind){
        let line = ''

        
        for (let col = 0; col < this.game.display.matrix[ind].length; col++) {
            const pixel = this.game.display.matrix[ind][col];
            line += TEXTURES[pixel]
        }

        return line
    }

    _getRend



    input(){

    }

    renderDisplay(){
        let display = [
        this.hor_lines.top,
        this.empty_line,
        `${this.br_gm.left}${this._getRendGameLine(0)}${this.br_gm.right}`,
        `${this.br_gm.left}${this._getRendGameLine(1)}${this.br_gm.right}`,
        `${this.br_gm.left}${this._getRendGameLine(2)}${this.br_gm.right}`,
        `${this.br_gm.left}${this._getRendGameLine(3)}${this.br_gm.right}`,
        `${this.br_gm.left}${this._getRendGameLine(4)}${this.br_gm.right}`,
        `${this.br_gm.left}${this._getRendGameLine(5)}${this.br_gm.right}`,
        `${this.br_gm.left}${this._getRendGameLine(6)}${this.br_gm.right}`,
        `${this.br_gm.left}${this._getRendGameLine(7)}${this.br_gm.right}`,
        `${this.br_gm.left}${this._getRendGameLine(8)}${this.br_gm.right}`,
        this.empty_line,
        this.hor_lines.mid,
        this.hor_lines.bot
        ]

        return display.join("\n")
    }

    output(){
        let rendered_display = this.renderDisplay()
        console.log(rendered_display)
    }
}
