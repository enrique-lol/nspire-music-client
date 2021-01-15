'use strict'

const userEvents = require('./userevents.js')
const pageEvents = require('./pageEvents.js')

$(() => {
  // on page load, reset application:
  pageEvents.appReset()

  // below: user sign-up and log-in event listeners
  $('#sign-up-form').on('submit', userEvents.newSignUp)
  $('#log-in-form').on('submit', userEvents.userSignIn)
  $('.user-leave').on('click', userEvents.userLeaveApp)
  // below: toggle sign-up-form on landing page
  $('.s-u-f-button').on('click', pageEvents.queueSignUp)

  // below: app navigation (toHome, toSettings, toNewPost)
  $('#home-button').on('click', pageEvents.toHome)
  $('#settings-button').on('click', pageEvents.toSettings)
  $('#new-post-button').on('click', pageEvents.toNewPost)

  // below: Setting Page form/event listeners
  $('.change-pw-form').on('submit', userEvents.changePw)
  $('.change-bio-form').on('submit', userEvents.changeBio)
  $('.change-avi-form').on('submit', userEvents.changeAvi)

  // create a review/post listener
  $('.new-post-form').on('submit', userEvents.newReview)
  $('#temporary-get-button').on('click', userEvents.fetchAllReviews)
  $('.delete-review-form').on('submit', userEvents.dltReview)
})
