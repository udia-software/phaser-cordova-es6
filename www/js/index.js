/**
 * Application Constructor. Ties in Cordova state events with Phaser Game State.
 */
var app = {
  initialize: function () {
    document.addEventListener(
      'deviceready',
      this.onDeviceReady.bind(this),
      false
    )
  },

  // deviceready Event Handler
  //
  // Bind any cordova events here. Common events are:
  // 'pause', 'resume', etc.
  onDeviceReady: function () {
    this.receivedEvent('deviceready')

    // When the device is ready, start Phaser Boot state.
    window.game.state.start('Boot')
  },

  receivedEvent: function (id) {
    console.log('Received Event: ' + id)
  }
}

app.initialize()
