'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.Index = function(require,res){
    response.ok("Aplikasi REST API ku berjalan!",res)
};