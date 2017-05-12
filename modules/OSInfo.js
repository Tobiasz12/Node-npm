var os = require('os');
var uptime = os.uptime();
var userInfo = os.userInfo();
var release = os.release();
var cpu = os.cpus()[0].model;
var timeFormat = require('./timeFormat');
var type = os.type();
var colors = require('colors')

function getOSinfo(){	
	if(type === 'Darwin') {
	    type = 'OSX';
	} else if(type === 'Windows_NT') {
	    type = 'Windows';
	}

	timeFormat.print(uptime);
	console.log('System:'.red, type);
	console.log('Release:'.green, release.inverse);
	console.log('CPU model:'.blue, cpu.rainbow);
	console.log('userInfo: '.yellow, userInfo.username);
	console.log('Home dir: '.red,userInfo.homedir);			
}

exports.print = getOSinfo;
 






