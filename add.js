var beep = require('./index.js')
function add (a, b) {
  var c = a + b
  console.log(c)
  beep(c)
}

add(2, 3)
