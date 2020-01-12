'use strict';

const mongoose = require('mongoose');

//begin User schema
const userSchema = mongoose.Schema({
    userName: { type: String, required: true },
    email: {type: String, required: true},
    password: {type: String, required: true}
});

const User = mongoose.model('User', userSchema);
// end User schema

//begin Tick Data schema
const tickDataSchema = mongoose.Schema({
    downloadDate: { type: String, required: true },
    gbpJpy: { type: Object, required: true },
    eurUsd: { type: Object, required: true },
    gbpUsd: { type: Object, required: true },
    usdJpy: { type: Object, required: true },
    usdChf: { type: Object, required: true},
    usdCad: { type: Object, required: true},
    audUsd: { type: Object, required: true},
    nzdUsd: {type: Object, required: true}
});

const TickData = mongoose.model('TickData', tickDataSchema);
// end Tick Data schema

module.exports = { User, TickData };