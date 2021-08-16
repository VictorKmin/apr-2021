function test() {
    console.log('CALL');
}

test();

module.exports = {
    greeting: function (name) {
        console.log('HELLO', name)
    }
}