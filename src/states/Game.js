import Phaser from 'phaser'
import Logo from '../sprites/Logo'

export default class extends Phaser.State {
  init () {}
  preload () {}

  create () {
    const bannerText = 'Phaser | Cordova | Webpack | ES6'
    let banner = this.add.text(
      this.world.centerX,
      this.game.height - 80,
      bannerText
    )
    banner.padding.set(10, 16)
    banner.fontSize = 25
    banner.fill = '#000'
    banner.smoothed = false
    banner.anchor.setTo(0.5)

    this.logo = new Logo({
      game: this.game,
      x: this.world.centerX,
      y: this.world.centerY,
      asset: 'logo'
    })

    this.game.add.existing(this.logo)
  }

  render () {
    this.game.debug.spriteInfo(this.logo, 32, 32)
  }
}
