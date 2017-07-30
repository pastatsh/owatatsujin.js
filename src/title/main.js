var Data = require('./data');

var State = module.exports = function() {}

State.prototype.preload = function() {
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.refresh();
	this.load.text('data', 'data.txt');
}

State.prototype.create = function() {
	this.data = new Data(this.cache.getText('data'));

	this.add.text(
		this.game.width / 2,
		this.game.height / 4,
		this.data.title,
		{ fill: '#ffffff' }
	).anchor.set(0.5);

	this.loadText = this.add.text(
		this.game.width / 2,
		this.game.height / 4 * 3,
		"Now Loading...",
		{ fill: '#ffffff' }
	);
	this.loadText.anchor.set(0.5);

	this.load.onLoadComplete.add(this.loadComplete, this);
	this.load.audio('dong', 'dong.mp3');
	this.load.audio('ka', 'ka.mp3');
	this.load.audio('bgm', 'bgm.mp3');
	this.load.start();
}

State.prototype.loadComplete = function() {
	this.state.start('ingame', true, false, this.data);
}