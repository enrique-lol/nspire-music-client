'use strict'
const store = require('./store.js')
const pageEvents = require('./pageEvents')
const contentEvents = require('./contentEvents.js')
const userevents = require('./userevents.js')

////////////////////////////////////////////////////////
// Below: sign UP success (dub) and fail (epic fail) responses
const signUpDub = function(response) {
  // console.log('the ui says: sign up dub')
  // console.log(response)
  $('form').trigger("reset")
  $('#first-page-message').text('Account created! Log in.')
}
const signUpEpicFail = function() {
  $('#first-page-message').text('ERROR: uh oh. stinky. Try again (fill all forms).')
}
///////////////////////////////////////////////////////
// below: sign IN success (dub) and fail (epic fail) responses
const signInDub = function (response) {
  // store = response
  store.user = response.user
  // console.log('u made it ui, bro', store.user)
  pageEvents.toHome()
  $('form').trigger("reset")
  $('#home-page-message').text('')
  // import user profile PICTURE
  $('.home-page-avi').append("<img class='pfp' src=" + ' "' + store.user.avi + '" ' +
  "style='width:100px;height:100px;'"+ ">")
  $('.nav-avi').append("<img class='pfp' src=" + ' "' + store.user.avi + '" ' +
  "style='width:35px;height:35px;'"+ ">")
  // userevents.fetchAllReviews()
  // console.log(store.user)

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
// below: bio update success (dub) and fail (epic fail) responses
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
// below: avi update success (dub) and fail (epic fail) responses
const changeAviDub = function(response) {
  // console.log('easy dubs')
  console.log(response)
  pageEvents.toHome()
  $('form').trigger("reset")
  $('#settings-page-message').text('')
  $('#home-page-message').text('Profile Picture successfully changed!')
}
const changeAviEpicFail = function() {
  console.log('avi fumbled')
}


/////////////////////////////////////////////////////
// below: New review success and fail responses
const reviewSuccess = function(response) {
  console.log('easy dubs')
  // console.log(response)
  pageEvents.toHome()
  $('form').trigger("reset")
  $('#new-post-page-message').text('')
  $('#home-page-message').text('Your review successfully uploaded!')
}
const reviewFailure = function() {
  // console.log('post fumbled')
  $('#new-post-page-message').text('oopsie review-machine broke.')
}
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
/////////////////////////////////////////////////////
// below: get all review success and fail responses
const getAllSuccess = function (response) {
  // console.log(response)
  // // console.log(response.reviews[1].title)
  // // console.log(allReviews)
  console.log('this thing is buggin out')
  const allReviews = response.reviews

  allReviews.forEach((item, i) => {
  $('#all-reviews-container').append(
    "<div class='single-review'> " +
    // add image to html with styling
    "<img src=" + ' " ' + item.image + ' " ' +
    "style='width:125px;height:125px;'"+ ">" +
    // add project name + "by" + artist
    "<h3 class='black-text josefin'>" + item.project + " by " +
    item.artist + "</h4>" +
    // add review TITLE ONLY
    "<p id='review-title'>" + item.title + "</p>" +
    // close div (with class of single-review)
    "<div>"

    // "<h5 id='review-title'>" + item.title + "</h5>" +
    // "<p id='review-text'>" + item.text + "</p>" +
    // "<img src=" + ' " ' + item.image + ' " ' +
    // "style='width:125px;height:125px;'"+ ">" +
    // "</div>"
  )
  });
  // $('home-page-message').text('HELLO WORLD LOL')
}
const getAllFail = function() {
  console.log('cannot GET all reviews rn.')
}
////////////////////////////////////////////
// const  = function(response) {
//   console.log('everything works!', response)
// }
// ///////////////////////////////////////////
// const fileConnectionFailure = function(){
//   console.log('files connect, but theres an error')
// }

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
  changeBioEpicFail ,
  changeAviDub ,
  changeAviEpicFail ,
  reviewSuccess ,
  reviewFailure ,
  getAllSuccess ,
  getAllFail ,
  }
