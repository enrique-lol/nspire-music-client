'use strict'
const store = require('./store.js')
const api = require('./userApi.js')
const ui = require('./ui.js')

// on load, or when signig out, app will reset
const appReset = function() {
  $('.page').hide()
  $('#navigation-bar').hide()
  $('.intro-page').show()
  $('.sign-up-formy').hide()
  $('.s-u-f-button').show()
  $('.intro-article').show()
  $('form').trigger("reset")
  $('#all-reviews-container').text('')
}

const queueSignUp = function() {
  $('.s-u-f-button').hide()
  $('.sign-up-formy').show()
}
// after sign-IN, show second page, or (first auth page)
const toHome = function() {
  $('.page').hide()
  $('#home-page-avi').text('')
  $('#navigation-bar').show()
  $('.home-page').show()
  $('#home-page-profile').text(store.user.email)
  $('#home-page-bio').text(store.user.bio)
  $('#home-page-avi').append("<img class='pfp' src=" + ' "' + store.user.avi + '" ' +
  "style='width:125px;height:125px;'"+ ">")
  // console.log('Bio text: ', store.user.bio)
  // console.log('===========================')
  // console.log('pfp URL: ', store.user.avi)




  $('form').trigger("reset")
  api.getReviewsRequest()
    .then(ui.getAllSuccess)
    .catch(ui.getAllFail)
}
// whenever sign-in, nav shows with 'settings' button:
// these are settings to change pw, change bio, log out
const toSettings = function() {
  $('.page').hide()
  $('#navigation-bar').show()
  $('.settings-page').show()
  $('form').trigger("reset")
}
// whenever signed-in, nav shows with 'new post' button
const toNewPost = function() {
  $('.page').hide()
  $('#navigation-bar').show()
  $('.new-post-page').show()
  $('form').trigger("reset")
}


module.exports = {
  appReset ,
  queueSignUp ,
  toHome,
  toSettings,
  toNewPost
  // , nextFromPageOne,
  // previousFromPageTwo ,
  // nextFromPageTwo ,
  // previousFromPageThree ,
  // nextFromPageThree ,
  // previousFromPageFour ,
}









// // page 1 next
// const nextFromPageOne = function() {
//   $('.intro-page').hide()
//   $('.home-page').show()
// }
// // page 2 pre and next
// const previousFromPageTwo = function() {
//   $('.home-page').hide()
//   $('.intro-page').show()
// }
// const nextFromPageTwo = function() {
//   $('.home-page').hide()
//   $('.settings-page').show()
// }
// // page 3 pre and next
// const previousFromPageThree = function() {
//   $('.settings-page').hide()
//   $('.home-page').show()
// }
// const nextFromPageThree = function() {
//   $('.settings-page').hide()
//   $('.new-post-page').show()
// }
// // page 4 pre and next
// const previousFromPageFour = function() {
//   $('.new-post-page').hide()
//   $('.settings-page').show()
// }
