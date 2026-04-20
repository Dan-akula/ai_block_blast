import input from 'input';
import Game from './game.js'
import { Figure } from './support_classes.js';

import {FIGURES} from './config.js'

const game = new Game()

let test = new Figure({})

test.randomaze()


game.getFigures()

game.cllRender()
