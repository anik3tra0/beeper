function beep () {
  process.stdout.write('\u0007')
}
beep()

function beepN (n) {
  if (n > 0) {
    beep()
    setTimeout(function () {
      n = n - 1
      beepN(n)
    }, 500)
  }
}

module.exports = beepN
