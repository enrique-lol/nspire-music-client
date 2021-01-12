'use strict'
const getFormFields = require('./../../lib/get-form-fields.js')
const api = require('./userApi.js')
const ui = require('./ui')
const store = require('./store.js')

/////////////////////////////////////////////////////
// THIS FUNCTION IN THIS FILE (CONTENTEVENTS) DOES NOT WORK
const newReview = function(event) {
  event.preventDefault()
  const data = (getFormFields(event.target))
  // console.log('new events page works!!1', data)
  api.newReview(data)
    .then(ui.reviewSuccess)
    .catch(ui.reviewFailure)
}
/////////////////////////////////////////////////////
// THIS FUNCTION IN THIS FILE (CONTENTEVENTS) DOES NOT WORK
const getAllAppReviews = function(event) {
  event.preventDefault()
  // console.log('you made it to getAllAppReviews')
  api.getReviewsRequest()
    .then(ui.testFunction)
    .catch(ui.allReviewFail)
}
/////////////////////////////////////////////////////
// THIS FUNCTION IN THIS FILE (CONTENTEVENTS) DOES NOT WORK
const fetchAllReviews = function(event) {
  event.preventDefault()
  console.log('you made it to contentEvents')
  api.getReviewsRequest()
    .then(ui.fileConnectionSuccess)
    .catch(ui.fileConnectionFailure)
}


module.exports = {
  newReview ,
  getAllAppReviews ,
  fetchAllReviews
}
