'use strict'
const store = require('./store.js')
const api = require('./userApi.js')
const ui = require('./ui.js')

/// /////////////////////////////////////////////////////////////////////////////

/// on load, or when signing out, app will reset
const appReset = function () {
  // Hide
  $('.page').hide()
  $('#navigation-bar').hide()
  $('.sign-up-formy').hide()

  // Show
  $('.intro-page').show()
  $('.s-u-f-button').show()
  $('.intro-article').show()

  // Reset or clear
  $('form').trigger('reset')
  $('#all-reviews-container').text('')
  $('.home-page-avi').text('')
  $('.nav-avi').text('')
}

/// ////////////////////////////////////////////////////////////////////////////

/// When new, user clicks to queue sign-up form
const queueSignUp = function () {
  // Hide
  $('.s-u-f-button').hide()

  // Show
  $('.sign-up-formy').show()

  // Reset or clear
  $('form').trigger('reset')
}

/// ////////////////////////////////////////////////////////////////////////////

/// After sign-IN, show Home.
/// When signed-in and not on Home, click Home button, show Home.
const toHome = function () {
  // Hide
  $('.page').hide()
  $('.nav-child-1').hide()
  $('#home-button').hide()

  // Show
  $('#navigation-bar').show()
  $('.home-page').show()
  $('#new-post-button').show()
  $('#settings-button').show()

  // Reset or clear
  $('#home-page-avi').text('')
  $('#all-reviews-container').text('')
  $('form').trigger('reset')

  // Populate or fill
  $('.home-page-profile').text(store.user.email)
  $('#home-page-bio').text(store.user.bio)
}

/// ///////////////////////////////////////////////////////////////////////////

/// these are settings to change pw, change bio, log out
const toSettings = function () {
  // Hide
  $('.page').hide()
  $('#settings-button').hide()

  // Show
  $('#navigation-bar').show()
  $('.settings-page').show()
  $('#home-button').show()
  $('#new-post-button').show()
  $('.nav-child-1').show()

  // Reset or clear
  $('form').trigger('reset')
}

/// ////////////////////////////////////////////////////////////////////////////

/// whenever signed-in, nav shows with 'new post' button. Go to New Post on click.
const toNewPost = function () {
  // Hide
  $('.page').hide()
  $('#new-post-button').hide()

  // Show
  $('#navigation-bar').show()
  $('.new-post-page').show()
  $('#home-button').show()
  $('#settings-button').show()
  $('.nav-child-1').show()

  // Clear or reset
  $('form').trigger('reset')
}

/// ///////////////////////////////////////////////////////////////////////////

module.exports = {
  appReset,
  queueSignUp,
  toHome,
  toSettings,
  toNewPost
}
