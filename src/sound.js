var Sound = {
	preload: function() {
		game.load.audio('bgm', 'bgm.mp3');
		game.load.audio('dong', 'dong.mp3');
		game.load.audio('ka', 'ka.mp3');
	},

	play: function() {
		this.player = game.sound.play('bgm');
	},

	playSe: function(type) {
		game.sound.play(type == Input.DON ? 'dong' : 'ka');
	}
};