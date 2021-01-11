'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const userEvents = require('./userevents.js')
const pageEvents = require('./pageEvents.js')
const contentEvents = require('./contentEvents.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // on page load, reset application:
  pageEvents.appReset()

  // below: user sign-up and log-in event listeners
  $('#sign-up-form').on('submit', userEvents.newSignUp)
  $('#log-in-form').on('submit', userEvents.userSignIn)
  $('.user-leave').on('click', userEvents.userLeaveApp)
  $('.s-u-f-button').on('click', pageEvents.queueSignUp)

  // app navigation
  $('#settings-button').on('click', pageEvents.toSettings)
  $('#new-post-button').on('click', pageEvents.toNewPost)
  $('#home-button').on('click', pageEvents.toHome)

  // update event listeners
  $('.change-pw-form').on('submit', userEvents.changePw)
  $('.change-bio-form').on('submit', userEvents.changeBio)
  $('.change-avi-form').on('submit', userEvents.changeAvi)

  // create a review/post listener
  $('.new-post-form').on('submit', userEvents.newReview)
  $('#temporary-get-button').on('click', userEvents.fetchAllReviews)



})










// Below test of site navigation
// $('.page').hide()
// $('#navigation-bar').hide()
// $('.p1').show()
// $('#next-from-p1').on('click', pageEvents.nextFromPageOne)
// $('#previous-from-p2').on('click', pageEvents.previousFromPageTwo)
// $('#next-from-p2').on('click', pageEvents.nextFromPageTwo)
// $('#previous-from-p3').on('click', pageEvents.previousFromPageThree)
// $('#next-from-p3').on('click', pageEvents.nextFromPageThree)
// $('#previous-from-p4').on('click', pageEvents.previousFromPageFour)
