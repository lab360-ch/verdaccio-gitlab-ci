const got = require('got');
const base64 = require('base64-min');

function Auth(config, stuff) {
  const self = Object.create(Auth.prototype);
  self._users = {};
  self._config = config;
  self._logger = stuff.logger;
  return self;
}

Auth.prototype.authenticate = function (user, password, cb) {
  'use strict';
  const encodedAuth = base64.encode(`${user}:${password}`);
  const fullURL = `${this._config.url}/jwt/auth?account=builder&client_id=docker&offline_token=[FILTERED]&service=container_registry`;

  return got(fullURL, {
    headers: {Authorization: `Basic ${encodedAuth}`},
    method: "GET",
    json: true,
    timeout: 15000,
    rejectUnauthorized: true,
    requestCert: true,
  }).then(function (response) {
    return cb(null, ['gitlab-ci']);
  }).catch(function (error) {
    return cb(null, false);
  });
};

Auth.prototype.adduser = function(user, password, cb) {
  cb(null, false);
};

module.exports = Auth;