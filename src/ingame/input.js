var Input = module.exports = function(input) {
	this.keys = [
		{ type: Const.DON, key: input.keyboard.addKey(Phaser.Keyboard.F) },
		{ type: Const.DON, key: input.keyboard.addKey(Phaser.Keyboard.J) },
		{ type: Const.KA,  key: input.keyboard.addKey(Phaser.Keyboard.D) },
		{ type: Const.KA,  key: input.keyboard.addKey(Phaser.Keyboard.K) }
	];
	this.pointers = [
		{ prev: false, pointer: input.pointer1 },
		{ prev: false, pointer: input.pointer2 }
	];
}

Input.prototype.get = function() {
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
			ret.push(x * x + y * y < 250 * 250 ? Const.DON : Const.KA);
		}
		p.prev = p.pointer.isDown;
	});
	return ret;
}