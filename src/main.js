var game = new Phaser.Game(1136, 640, Phaser.AUTO, '');
game.state.add('title', require('./title/main'));
game.state.add('ingame', require('./ingame/main'));
game.state.start('title');