'use strict'
exports.DATABASE_URL = process.env.DATABASE_URL || global.DATABASE_URL || 
'mongodb://abc123:abc123@ds363088.mlab.com:63088/oanda-web-app';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL ||
    'mongodb://abc123:abc123@ds363088.mlab.com:63088/oanda-web-app';
exports.PORT = process.env.PORT || 8080;