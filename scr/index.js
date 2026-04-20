import input from 'input';
import Game from './game.js'
import { Figure } from './support_classes.js';

import {FIGURES} from './config.js'

const game = new Game()

game.cllRender()

let test = new Figure({})

test.randomaze()

console.log(test)

game.display.placeFigure({x:5, y:5, figure:test})

game.cllRender()
