'use strict'
const store = require('./store.js')
const pageEvents = require('./pageEvents')

////////////////////////////////////////////////////////
// Below: sign UP success (dub) and fail (epic fail) responses
const signUpDub = function(response) {
  // console.log('the ui says: sign up dub')
  // console.log(response)
  $('form').trigger("reset")
  $('#first-page-message').text('Account created! Log in.')
}
const signUpEpicFail = function() {
  $('#first-page-message').text('ERROR: uh oh. stinky. Try again.')
}
///////////////////////////////////////////////////////
// below: sign IN success (dub) and fail (epic fail) responses
const signInDub = function (response) {
  // store = response
  store.user = response.user
  // console.log('u made it ui, bro', store.user)
  pageEvents.toHome()
  $('form').trigger("reset")
  // console.log(store.user.bio)

}
const signInEpicFail = function() {
  $('#first-page-message').text('ERROR: the vibes are off, bro. Try again.')
}
///////////////////////////////////////////////////////
// below: Sign OUT success (dub) and fail (epic fail) responses
const signOutDub = function () {
  pageEvents.appReset()
  $('#first-page-message').text('See you soon ;)')
}
const signOutEpicFail = function() {
  console.log('u may not log out O.O  Try again.')
}
/////////////////////////////////////////////////////
// below: change pw success (dub) and fail (epic fail) responses
const changePwDub = function() {
  // console.log('looking good B)')
  $('form').trigger("reset")
  pageEvents.toHome()
  $('#home-page-message').text('Password successfully changed!')
  $('#settings-page-message').text('')
}
const changePwEpicFail = function() {
  // console.log('bag fumbled')
  $('#settings-page-message').text("su'm not right")
}
/////////////////////////////////////////////////////
// below: Sign OUT success (dub) and fail (epic fail) responses
const changeBioDub = function(response) {
  // console.log('easy dubs')
  console.log(response)
  pageEvents.toHome()
  $('form').trigger("reset")
  $('#settings-page-message').text('')
  $('#home-page-message').text('Bio successfully changed!')
}
const changeBioEpicFail = function() {
  console.log('bio fumbled')
}
/////////////////////////////////////////////////////


module.exports = {
  signUpDub ,
  signUpEpicFail ,
  signInDub ,
  signInEpicFail ,
  signOutDub ,
  signOutEpicFail ,
  changePwDub ,
  changePwEpicFail ,
  changeBioDub ,
  changeBioEpicFail
}
