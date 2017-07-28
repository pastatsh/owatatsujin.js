import Phaser from 'phaser';
import { game } from './main';
import Input from './input';

// webpack で js に埋め込んだ SE の URL を取得する
import seDongUrl from 'file-loader!./resources/dong.mp3';
import seKaUrl from 'file-loader!./resources/ka.mp3';

var Sound = {
    preload: function() {
        game.load.audio('bgm', 'bgm.mp3');
        game.load.audio('dong', seDongUrl);
        game.load.audio('ka', seKaUrl);
    },

    play: function() {
        this.player = game.sound.play('bgm');
    },

    playSe: function(type) {
        game.sound.play(type == Input.DON ? 'dong' : 'ka');
    }
};

export default Sound;
