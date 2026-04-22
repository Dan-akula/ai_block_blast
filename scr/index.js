import input from 'input';
import Game from './game.js'
import { Figure } from './support_classes.js';
import { Cllio } from './cll/ios.js';
import {FIGURES} from './config.js'

const game = new Game()
game.getFigures()


const cios = new Cllio(game)
while (true){
    cios.output()
    await cios.input(
        {x:await input.text("x"), y:await input.text("y"), fig:await input.text("fig_num")}
    )
}
