// Phaser を読み込む
import 'pixi.js'
import 'p2'
import Phaser from 'phaser';

var game = new Phaser.Game(1136, 640, Phaser.AUTO, '', { preload: preload, create: create, update: update, render: render });

// 他のファイルに game を渡さないといけない
export { game };

import Sound from './sound';
import Input from './input';
import Data from './data';

var notes;

function preload() {
    game.load.text('data', 'data.txt');
    Sound.preload();
}

function create() {
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    game.scale.refresh();

    var data = new Data(game.cache.getText('data'));
    notes = data.analyze("seq4");

    Input.init();
    Sound.play();
}

function update() {
    /*
	Input.get().forEach(function(type) {
		Sound.playSe(type);
	});
    */
    if (notes[0].time * 1000 <= Sound.player.currentTime) {
        Sound.playSe(notes[0].type);
        notes.shift();
    }
}

function render() {}
