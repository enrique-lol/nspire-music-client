'use strict'
const getFormFields = require('./../../lib/get-form-fields.js')
const api = require('./userApi.js')
const ui = require('./ui')

////////////////////////////////////////////////////////////////////////////////
// User sign-up event should prevent default, rename data, send to api, have ui response
const newSignUp = function(event) {
  event.preventDefault()
  // console.log('whoopity scoop')
  const form = event.target
  const data = getFormFields(form)
  // console.log(data)
  api.signUpRequest(data)
    .then(ui.signUpDub)
    .catch(ui.signUpEpicFail)
}
///////////////////////////////////////////////////////////////////////////////
// User sign-in event should prevent default, rename data, send to api, have ui response
const userSignIn = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log('u made it to events!!1!11!', data)
  api.signInRequest(data)
    .then(ui.signInDub)
    .catch(ui.signInEpicFail)
}
///////////////////////////////////////////////////////////////////////////////
// User Leave app event should prevent default, rename data, send to api, have ui response
const userLeaveApp = function(event) {
  event.preventDefault()
// console.log('someone is trying to leave :(')
  api.leaveRequest()
    .then(ui.signOutDub)
    .catch(ui.signOutEpicFail)
}
/////////////////////////////////////////////////////////////////////////////
const changePw = function(event) {
    event.preventDefault()
    // console.log('made it to events')
    const data = getFormFields(event.target)
    // console.log(data)
    api.changePwRequest(data)
      .then(ui.changePwDub)
      .catch(ui.changePwEpicFail)
}
////////////////////////////////////////////////////////////////////////
const changeBio = function(event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // console.log(data)
  api.changeBioRequest(data)
    .then(ui.changeBioDub)
    .catch(ui.changeBioEpicFail)
}
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// CONTENTEVENT FUNCTION
const newReview = function(event) {
  event.preventDefault()
  const data = (getFormFields(event.target))
  // console.log('new events page works!!1', data)
  api.newReview(data)
    .then(ui.reviewSuccess)
    .catch(ui.reviewFailure)
}
/////////////////////////////////////////////
// CONTENTEVENT FUNCTION
const fetchAllReviews = function(event) {
  event.preventDefault()
  console.log('you made it to events file')
  api.getReviewsRequest()
    .then(ui.getAllSuccess)
    .catch(ui.getAllFail)
}
/////////////////////////////////////////////




module.exports = {
  newSignUp ,
  userSignIn ,
  userLeaveApp ,
  changePw ,
  changeBio ,
  newReview ,
  fetchAllReviews ,
  newReview
}
