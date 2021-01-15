'use strict'
const store = require('./store.js')
const pageEvents = require('./pageEvents')
const contentEvents = require('./contentEvents.js')
const userevents = require('./userevents.js')

/// /////////////////////////////////////////////////////

// Below: sign UP success (dub) and fail (epic fail) responses
const signUpDub = function (response) {
  // console.log('the ui says: sign up dub')
  // console.log(response)
  $('form').trigger('reset')
  $('#first-page-message').text('Account created! Log in.')
}

const signUpEpicFail = function () {
  $('#first-page-message').text('ERROR: uh oh. stinky. Try again (fill all forms).')
}

/// ////////////////////////////////////////////////////////////////////

// below: sign IN success (dub) and fail (epic fail) responses
const signInDub = function (response) {
  // save API response to store file
  store.user = response.user
  /// Below: after sign-in, page-navigate to home page
  pageEvents.toHome()
  $('form').trigger('reset')
  $('#home-page-message').text('')
  // Below: Add user data (profile picture, bio)
  $('.home-page-avi').append("<img class='pfp' src=" + ' "' + store.user.avi + '" ' +
  "style='width:100px;height:100px;'" + '>')
  $('.nav-avi').append("<img class='pfp' src=" + ' "' + store.user.avi + '" ' +
  "style='width:35px;height:35px;'" + '>')
}

const signInEpicFail = function () {
  $('#first-page-message').text('ERROR: the vibes are off, bro. Try again.')
}

/// ////////////////////////////////////////////////////////////////////////

// below: Sign OUT success (dub) and fail (epic fail) responses
const signOutDub = function () {
  pageEvents.appReset()
  $('#first-page-message').text('Thanks for visiting!')
}

const signOutEpicFail = function () {
  console.log('u may not log out O.O  Try again.')
}

/// ///////////////////////////////////////////////////////////////////////

// below: change pw success (dub) and fail (epic fail) responses
const changePwDub = function () {
  // console.log('looking good B)')
  $('form').trigger('reset')
  pageEvents.toHome()
  $('#home-page-message').text('Password successfully changed!')
  $('#settings-page-message').text('')
}

const changePwEpicFail = function () {
  // console.log('bag fumbled')
  $('#settings-page-message').text("su'm not right")
}

/// /////////////////////////////////////////////////////////////////////

// below: bio update success (dub) and fail (epic fail) responses
const changeBioDub = function (response) {
  console.log(response)
  pageEvents.toHome()
  $('form').trigger('reset')
  $('#settings-page-message').text('')
  $('#home-page-message').text('Bio successfully changed!')
}

const changeBioEpicFail = function () {
  console.log('bio fumbled')
}

/// ///////////////////////////////////////////////////////////////////

// below: avi (avitar) update success (dub) and fail (epic fail) responses
const changeAviDub = function (response) {
  pageEvents.toHome()
  $('form').trigger('reset')
  $('#settings-page-message').text('')
  $('#home-page-message').text('Profile Picture successfully changed!')
}

const changeAviEpicFail = function () {
  console.log('avi fumbled')
}

/// ////////////////////////////////////////////////////////////////////

// below: New review success and fail responses
const reviewSuccess = function (response) {
  pageEvents.toHome()
  $('form').trigger('reset')
  $('#new-post-page-message').text('')
  $('#home-page-message').text('Your review successfully uploaded!')
  $('#all-reviews-container').text('')
}
const reviewFailure = function () {
  // console.log('post fumbled')
  $('#new-post-page-message').text('oopsie! review-machine broke.')
}
/// ///////////////////////////////////////////////////////////////////////////
/// ///////////////////////////////////////////////////////////////////////////

// below: get all review success and fail responses
const getAllSuccess = function (response) {
  // Below: save response as new variable, allReviews
  const allReviews = response.reviews

  // Below: Loop through allReviews. They should fall into 1/2 categories: owned or un-owned

  allReviews.forEach((review, i) => {
    // Logic:
    // For every review, print the data embedded in HTML tags
    // If (review.owner  === store.user._id),
    // then the currently signed-in user is the owner of the review.
    // If true , assign class of "user-owned-review"
    if (review.owner === store.user._id) {
      $('#all-reviews-container').append(
        "<div class='single-review user-owned-review'> " +

        // FIRST LEFT-HALF OF SINGLE-REVIEW : cover art, project name, and artist
        "<div class='proj-data s-review-child'>" +

        // add image to html with styling
        "<img class='s-review-img' src=" + ' " ' + review.image + ' " ' +
        "style='width:125px;height:125px;'" + '>' +

        // add project name + artist
        "<h3 class='black-text josefin s-review-project'>" + review.project + '</h3>' +
        "<p class='black-text' s-review-artist>" + review.artist + '</p>' +

        // CLOSE LEFT-HALF of SINGLE-REVIEW and open RIGHT-HALF
        // Right half includes owner-data; the review and review name
        '</div>' + "<div class='owner-data s-review-child'>" +

        // add review TITLE embedded in html
        "<h3 id='review-title'>" + review.title + '</h3>' +

        // add whole review text
        "<p id='review-text'>" + review.text + '</p>' +
        "<p class='review-id' >Review ID: " + review._id + '</p>' +

        // close RIGHT HALF div and main (with class of single-review)
        '</div>' +
        '</div>')
}

    // else if the user is not the review owner, print review regularly
    else if (review.owner !== store.user._id) {
      $('#all-reviews-container').append(
        "<div class='single-review'> " +

    // FIRST LEFT-HALF OF SINGLE-REVIEW
    "<div class='proj-data s-review-child'>" +

    // add image to html with styling
    "<img class='s-review-img' src=" + ' " ' + review.image + ' " ' +
    "style='width:125px;height:125px;'" + '>' +

    // add project name +  artist
    "<h3 class='black-text josefin s-review-project'>" + review.project + '</h3>' +
    "<p class='black-text' s-review-artist>" + review.artist + '</p>' +

    // CLOSE LEFT-HALF OF SINGLE-REVIEW and open RIGHT-HALF
    '</div>' + "<div class='owner-data s-review-child'>" +

    // add review TITLE
    "<h3 id='review-title'>" + review.title + '</h3>' +

    // add  review text
    "<p id='review-text'>" + review.text + '</p>' +

    // close RIGHT HALF div and main (with class of single-review)
    '</div>' +

    '</div>'
      )
    }
  })
}
const getAllFail = function () {
  console.log('cannot GET all reviews rn.')
}
/// ///////////////////////////////////////////////////////////////////////////

const dltReviewSuccess = function () {
  // console.log('success')
  $('form').trigger('reset')
  pageEvents.toHome()
  $('#home-page-message').text('Ok fine, review deleted.')
}

const dltReviewFailure = function () {
  $('#settings-page-message').text('ERROR: Sorry, it has to stay up for some reason')
  pageEvents.toHome()
  $('#home-page-message').text('Ok fine, review deleted.')
}

module.exports = {
  signUpDub,
  signUpEpicFail,
  signInDub,
  signInEpicFail,
  signOutDub,
  signOutEpicFail,
  changePwDub,
  changePwEpicFail,
  changeBioDub,
  changeBioEpicFail,
  changeAviDub,
  changeAviEpicFail,
  reviewSuccess,
  reviewFailure,
  getAllSuccess,
  getAllFail,
  dltReviewSuccess,
  dltReviewFailure
}
