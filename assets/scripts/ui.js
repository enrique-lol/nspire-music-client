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
  $('#all-reviews-container').text('')
}
const reviewFailure = function() {
  // console.log('post fumbled')
  $('#new-post-page-message').text('oopsie! review-machine broke.')
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

  allReviews.forEach((review, i) => {

    // If (review.owner (owner id) === store.user._id),
    // then the signed-in user is the owner of that review.
    // If true (review.owner === user), color different, add delete button
    if (review.owner === store.user._id) {
      $('#all-reviews-container').append(
        "<div class='single-review user-owned-review'> " +

        // FIRST LEFT-HALF OF S-REVIEW
        "<div class='proj-data s-review-child'>" +
        // add image to html with styling
        "<img class='s-review-img' src=" + ' " ' + review.image + ' " ' +
        "style='width:125px;height:125px;'"+ ">" +
        // add project name + "by" + artist
        "<h3 class='black-text josefin s-review-project'>" + review.project + "</h3>" +
        "<p class='black-text' s-review-artist>" + review.artist + "</p>" +
        // CLOSE LEFT HALF OF S-Review AND OPEN RIGHT HALF
        "</div>" + "<div class='owner-data s-review-child'>" +

        // add review TITLE ONLY
        "<h3 id='review-title'>" + review.title + "</h3>" +
        // add whole review text
        "<p id='review-text'>" + review.text + "</p>" +
        "<button id='delete-review' type='click'>Delete Review</button> " +
        // close RIGHT HALF div and main (with class of single-review)
        "</div>"  +

        "</div>")
    }
    // else print regularly
     else if (review.owner != store.user._id) {

  $('#all-reviews-container').append(
    "<div class='single-review'> " +

    // FIRST LEFT-HALF OF S-REVIEW
    "<div class='proj-data s-review-child'>" +
    // add image to html with styling
    "<img class='s-review-img' src=" + ' " ' + review.image + ' " ' +
    "style='width:125px;height:125px;'"+ ">" +
    // add project name + "by" + artist
    "<h3 class='black-text josefin s-review-project'>" + review.project + "</h3>" +
    "<p class='black-text' s-review-artist>" + review.artist + "</p>" +
    // CLOSE LEFT HALF OF S-Review AND OPEN RIGHT HALF
    "</div>" + "<div class='owner-data s-review-child'>" +

    // add review TITLE ONLY
    "<h3 id='review-title'>" + review.title + "</h3>" +
    // add whole review text
    "<p id='review-text'>" + review.text + "</p>" +
    // close RIGHT HALF div and main (with class of single-review)
    "</div>"  +

    "</div>"

    // "<h5 id='review-title'>" + review.title + "</h5>" +
    // "<p id='review-text'>" + review.text + "</p>" +
    // "<img src=" + ' " ' + review.image + ' " ' +
    // "style='width:125px;height:125px;'"+ ">" +
    // "</div>"
  )
}
  // console.log(review.owner)
  });
  // console.log(store.user)
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
