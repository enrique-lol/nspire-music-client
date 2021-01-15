'use strict'
const getFormFields = require('./../../lib/get-form-fields.js')
const api = require('./userApi.js')
const ui = require('./ui')

/// /////////////////////////////////////////////////////////////////////////////

// User sign-up event should prevent default, rename data, send to api, have ui response
const newSignUp = function (event) {
  event.preventDefault()

  const form = event.target
  const data = getFormFields(form)

  api.signUpRequest(data)
    .then(ui.signUpDub)
    .catch(ui.signUpEpicFail)
}
/// ////////////////////////////////////////////////////////////////////////////

// User sign-in event should prevent default, rename data, send to api, have ui response
const userSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.signInRequest(data)
    .then(ui.signInDub)
    .catch(ui.signInEpicFail)
}

/// ////////////////////////////////////////////////////////////////////////////

// User Leave app event should prevent default, rename data, send to api, have ui response
const userLeaveApp = function (event) {
  event.preventDefault()

  api.leaveRequest()
    .then(ui.signOutDub)
    .catch(ui.signOutEpicFail)
}

/// //////////////////////////////////////////////////////////////////////////

const changePw = function (event) {
  event.preventDefault()

  const data = getFormFields(event.target)

  api.changePwRequest(data)
    .then(ui.changePwDub)
    .catch(ui.changePwEpicFail)
}

/// /////////////////////////////////////////////////////////////////////

const changeBio = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changeBioRequest(data)
    .then(ui.changeBioDub)
    .catch(ui.changeBioEpicFail)
}

/// /////////////////////////////////////////////////////////////////////

const changeAvi = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)

  api.changeAviRequest(data)
    .then(ui.changeAviDub)
    .catch(ui.changeAviEpicFail)
}

/// ///////////////////////////////////////////////////////////////////
/// ///////////////////////////////////////////////////////////////////

const newReview = function (event) {
  event.preventDefault()
  const data = (getFormFields(event.target))

  api.newReview(data)
    .then(ui.reviewSuccess)
    .catch(ui.reviewFailure)
}

/// //////////////////////////////////////////

const fetchAllReviews = function () {
  api.getReviewsRequest()
    .then(ui.getAllSuccess)
    .catch(ui.getAllFail)
}

/// //////////////////////////////////////////
const toHome = function () {
  $('.page').hide()
  $('#navigation-bar').show()
  $('.home-page').show()
  $('#home-page-profile').text(store.user.email)
  $('#home-page-bio').text(store.user.bio)
  $('form').trigger('reset')
  api.getReviewsRequest()
    .then(ui.getAllSuccess)
    .catch(ui.getAllFail)
}
/// /////////////////////////////////////////
const dltReview = function (event) {
  event.preventDefault()
  // console.log('event target: ', event.target)
  const data = getFormFields(event.target)
  // console.log(data)

  api.dltReviewRequest(data)
    .then(ui.dltReviewSuccess)
    .catch(ui.dltReviewFailure)
}

/// //////////////////////////////////////

module.exports = {
  newSignUp,
  userSignIn,
  userLeaveApp,
  changePw,
  changeBio,
  changeAvi,
  newReview,
  fetchAllReviews,
  toHome,
  dltReview
}
