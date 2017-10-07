import 'pixi'
import 'p2'
import Phaser from 'phaser'

import BootState from './states/Boot'
import GameState from './states/Game'
import PreloadState from './states/Preload'

import config from './config'

class Game extends Phaser.Game {
  constructor () {
    // get both w and h of the screen
    // (some devices/browser measure this differntly, so you dont know for sure which one is which)
    var w = window.innerWidth * window.devicePixelRatio
    var h = window.innerHeight * window.devicePixelRatio

    // get the actual w and h. in landscape we'll define w as the longest one
    var width = Math.max(w, h)
    var height = Math.min(w, h)
    // Do we need to scale to fit in width?
    if (width > config.gameWidth) {
      var ratioWidth = config.gameWidth / width
      width *= ratioWidth
      height *= ratioWidth
    }

    // Do we need to scale to fit in height?
    if (height > config.gameHeight) {
      var ratioHeight = config.gameHeight / height
      width *= ratioHeight
      height *= ratioHeight
    }

    super(width, height, Phaser.AUTO, 'content', null)

    this.state.add('Boot', BootState, false)
    this.state.add('Preload', PreloadState, false)
    this.state.add('Game', GameState, false)
  }
}

window.game = new Game()
