import Phaser from 'phaser'

export default class extends Phaser.State {
  init () {
    this.stage.backgroundColor = '#FFF'
    this.fontsReady = true
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
  }

  preload () {
    let text = this.add.text(
      this.world.centerX,
      this.world.centerY,
      'loading...',
      { font: '16px Arial', fill: '#000', align: 'center' }
    )
    text.anchor.setTo(0.5, 0.5)

    this.load.image('loaderBg', 'assets/images/loader-bg.png')
    this.load.image('loaderBar', 'assets/images/loader-bar.png')
  }

  create () {
    this.state.start('Preload')
  }
}
