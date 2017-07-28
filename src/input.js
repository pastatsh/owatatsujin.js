var Input = {
	DON: 1,
	KA: 2,

	init: function() {
		this.keys = [
			{ type: this.DON, key: game.input.keyboard.addKey(Phaser.Keyboard.F) },
			{ type: this.DON, key: game.input.keyboard.addKey(Phaser.Keyboard.J) },
			{ type: this.KA,  key: game.input.keyboard.addKey(Phaser.Keyboard.D) },
			{ type: this.KA,  key: game.input.keyboard.addKey(Phaser.Keyboard.K) }
		];
		this.pointers = [
			{ prev: false, pointer: game.input.pointer1 },
			{ prev: false, pointer: game.input.pointer2 }
		];
	},

	get: function() {
		var ret = [];
		this.keys.forEach(function(k) {
			if(k.key.justPressed(0)) {
				ret.push(k.type);
			}
		});
		this.pointers.forEach(function(p) {
			if(p.pointer.isDown && !p.prev) {
				var x = p.pointer.x - 568;
				var y = p.pointer.y - 568;
				ret.push(x * x + y * y < 250 * 250 ? this.DON : this.KA);
			}
			p.prev = p.pointer.isDown;
		});
		return ret;
	}
};