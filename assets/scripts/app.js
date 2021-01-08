'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const events = require('./events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // Below test of site navigation
  $('.page').hide()
  $('.p1').show()
  $('#next-from-p1').on('click', events.nextFromPageOne)
  $('#previous-from-p2').on('click', events.previousFromPageTwo)
  $('#next-from-p2').on('click', events.nextFromPageTwo)
  $('#previous-from-p3').on('click', events.previousFromPageThree)
  $('#next-from-p3').on('click', events.nextFromPageThree)
  $('#previous-from-p4').on('click', events.previousFromPageFour)
  // below: testing the login navigation to next page
  $('#sign-in-form').on('submit', events.nextFromPageOne)
  // your JS code goes here
})
