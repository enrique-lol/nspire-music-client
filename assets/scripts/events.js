

const nextFromPageOne = function() {
  event.preventDefault()
  $('.p1').hide()
  $('.p2').show()
}
// page 2 pre and next
const previousFromPageTwo = function() {
  $('.p2').hide()
  $('.p1').show()
}
const nextFromPageTwo = function() {
  $('.p2').hide()
  $('.p3').show()
}
// page 3 pre and next
const previousFromPageThree = function() {
  $('.p3').hide()
  $('.p2').show()
}
const nextFromPageThree = function() {
  $('.p3').hide()
  $('.p4').show()
}
// page 4 pre and next
const previousFromPageFour = function() {
  $('.p4').hide()
  $('.p3').show()
}

module.exports = {
  nextFromPageOne ,
  previousFromPageTwo ,
  nextFromPageTwo ,
  previousFromPageThree ,
  nextFromPageThree ,
  previousFromPageFour
}
