'use strict';

/*
 *  Module dependencies
*/

var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var privs = {
  values = ['box1'],
  message : 'enum validator failed for `{PATH}` with value `{VALUE}`'
};

var AuthSchema = new Schema({
  name : {
    type : String,
    required: true
  },
  swipe : {
    type: String,
    enum : privs
    required: true
  },
  privs : [{
    type : String,
    enum: privs
  }]
  //TODO - Add experiation date
});

mongoose.model('Auth', AuthSchema);
