ZenvaRunner.Preload = function() {
  this.ready = false;
};

ZenvaRunner.Preload.prototype = {
  preload: function() {

    this.splash = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
    this.splash.anchor.setTo(0.5);

    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY + 128, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);

    this.load.setPreloadSprite(this.preloadBar);

    this.load.image('ground', 'assets/images/ground_jetpug.png');
    this.load.image('background', 'assets/images/background_jetpug.jpg');

    this.load.image('foreground', 'assets/images/foreground_jetpug.png');
    this.load.image('bowl', 'assets/images/dogbowl.png');//refactor to be scoreboard

    this.load.spritesheet('coins', 'assets/images/treat.png', 110, 100, 8); //refactor to be collectable
    // this.load.spritesheet('player', 'assets/images/jetpack-ps-lgia.png', 349, 278, 4);
    this.load.spritesheet('player', 'assets/images/player_pug.png', 222, 129, 4);
    // this.load.spritesheet('missile', 'assets/images/missiles-ps.png', 361, 218, 4);
    this.load.spritesheet('missile', 'assets/images/tick.png', 199, 281, 4); //refactor to be enemy

    // this.load.audio('gameMusic1', ['assets/audio/Pamgaea.mp3', 'assets/audio/Pamgaea.ogg']);
    this.load.audio('gameMusic', ['assets/audio/theme1.mp3']);
    this.load.audio('rocket', 'assets/audio/rocket.wav'); 
    this.load.audio('bounce', 'assets/audio/bounce.wav');
    this.load.audio('coin', 'assets/audio/coin.wav');
    this.load.audio('death', 'assets/audio/death.wav');

    this.load.bitmapFont('minecraftia', 'assets/fonts/minecraftia/minecraftia.png', 'assets/fonts/minecraftia/minecraftia.xml');

    this.load.onLoadComplete.add(this.onLoadComplete, this);
  },
  create: function() {
    this.preloadBar.cropEnabled = false;
  }, 
  update: function() {
    if(this.cache.isSoundDecoded('gameMusic') && this.ready === true) {
      this.state.start('MainMenu');
    }
  },
  onLoadComplete: function() {
    this.ready = true;
  }
};