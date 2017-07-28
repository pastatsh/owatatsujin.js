import Input from './input';

function Data(str) {
    var self = this;
    str.replace(/\r?\n/g, '').split('&').forEach(function(tmp) {
        var i = tmp.indexOf('=');
        var value = tmp.slice(i + 1);
        if (isFinite(value) && value != "") {
            value = parseFloat(value);
        }
        self[tmp.slice(0, i)] = value;
    });
    if (this.BPM != undefined) {
        this.setBPM(this.BPM);
    }
    /*
    for(var i = 1; i <= 4; i++) {
    		if(this["seq" + i] != undefined) {
    			console.log(this["seq" + i]);
    		}
    	}
        */
}

Data.prototype.setBPM = function(bpm) {
    this.BPM = bpm;
    var measure = 240 / bpm;
    for (var x = 16; x <= 64; x += 8) {
        this['u' + x] = measure / x;
    }
    this.unit_time = this.u16;
}

Data.prototype.analyze = function(name) {
    var getArg = function() {
        var tmp = "";
        for (seq.shift(); seq[0] != ')'; tmp += seq.shift());
        seq.shift();
        return isFinite(tmp) ? parseFloat(tmp) : this[tmp];
    };
    var notes = [];
    var time = this.start_time;
    var seq = this[name].split('');
    var c;
    while (c = seq.shift()) {
        if (c == "1" || c == "3") {
            notes.push({
                type: Input.DON,
                time: time
            });
        } else if (c == "2" || c == "4") {
            notes.push({
                type: Input.KA,
                time: time
            });
        } else if (c == ",") {
            time += this.unit_time;
        } else if (c == 'm') {
            this.setBPM(getArg());
        } else if (c == 'x') {
            getArg(); // TODO
        } else if (c == '[') {
            this.unit_time /= 1.5;
        } else if (c == ']') {
            this.unit_time *= 1.5;
        }
    }
    return notes;
}


export default Data;
