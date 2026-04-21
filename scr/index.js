import input from 'input';
import Game from './game.js'
import { Figure } from './support_classes.js';
import { Cllio } from './cll/ios.js';
import {FIGURES} from './config.js'

const game = new Game()
game.getFigures()

const cios = new Cllio(game)
game.cllRender()
cios.output()