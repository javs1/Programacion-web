//var Emmiter = require('./emitter');
var Emmiter = require('events');
var config = require('./config')
var emtr = new Emmiter();

emtr.on(config.events.GREET, () => {
    console.log('Somewhere, someone said hello.');
});

emtr.on('greet', () => {
    console.log('A greeting ocurrred!');
});

console.log('Hello!');
emtr.emit('greet');

emtr.on(config.events.JUMP , () => {
    console.log('someone jumped!');
});
console.log(emtr)
emtr.emit('jump');