'use strict'
const config = require('./config.js')
const store = require('./store.js')

//////////////////////////////////////////////////////
// sign up request should include long ajax fx
const signUpRequest = function(formData) {
  // console.log('api dub', signUpData)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: formData
  })
}
///////////////////////////////////////////////////////
const signInRequest = function(data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in' ,
    method: 'POST' ,
    data
  })
}
///////////////////////////////////////////////////////
const leaveRequest = function() {
  return $.ajax({
    url: config.apiUrl + '/sign-out' ,
    method: 'DELETE' ,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
///////////////////////////////////////////////////
const changePwRequest = function(data) {
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH' ,
    data ,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
///////////////////////////////////////////////////
const changeBioRequest = function(data) {
  return $.ajax({
    url: config.apiUrl + '/change-bio',
    method: 'PATCH' ,
    data ,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
///////////////////////////////////////////////
const changeAviRequest = function(data) {
  return $.ajax({
    url: config.apiUrl + '/change-avi',
    method: 'PATCH' ,
    data ,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
//////////////////////////////////////////////
const newReview = function (data) {
  return $.ajax({
    url: config.apiUrl + '/reviews',
    method: 'POST',
    data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
////////////////////////////////////////////////
const getReviewsRequest = function() {
  console.log('the api GET function is firing!')
  return $.ajax({
    url: config.apiUrl + '/reviews',
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
/////////////////////////////////////////////
const dltReviewRequest = function(data) {
    return $.ajax({
    url: config.apiUrl + '/reviews/' + data.id ,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
//////////////////////////////////////////


module.exports = {
  signUpRequest ,
  signInRequest ,
  leaveRequest ,
  changePwRequest ,
  changeBioRequest ,
  changeAviRequest ,
  newReview ,
  getReviewsRequest ,
  dltReviewRequest
}
