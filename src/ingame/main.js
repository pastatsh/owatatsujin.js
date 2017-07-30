var Input = require('./input');

var State = module.exports = function() {}

State.prototype.init = function(data) {
	this.notes = data.analyze("seq4");
}

State.prototype.create = function() {
	this.input = new Input(this.input);
	this.bgm = this.sound.play('bgm');
}

State.prototype.update = function() {
	/*
	this.input.get().forEach(function(type) {
		this.game.sound.play(type == this.input.DON ? 'dong' : 'ka');
	}, this);
	*/
	if(this.notes[0].time * 1000 <= this.bgm.currentTime) {
		this.game.sound.play(this.notes[0].type == Const.DON ? 'dong' : 'ka');
		this.notes.shift();
	}
}