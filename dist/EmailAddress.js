'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _error = require('graphql/error');

var _language = require('graphql/language');

/* eslint-disable no-useless-escape */
var EMAIL_ADDRESS_REGEX = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
/* eslint-enable */

exports.default = new _graphql.GraphQLScalarType({
  name: 'EmailAddress',

  description: 'A field whose value conforms to the standard internet email address format as specified in RFC822: https://www.w3.org/Protocols/rfc822/.',

  serialize: function serialize(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Value is not string: ' + value);
    }

    if (!EMAIL_ADDRESS_REGEX.test(value)) {
      throw new TypeError('Value is not a valid email address: ' + value);
    }

    return value;
  },
  parseValue: function parseValue(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Value is not string');
    }

    if (!EMAIL_ADDRESS_REGEX.test(value)) {
      throw new TypeError('Value is not a valid email address: ' + value);
    }

    return value;
  },
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind !== _language.Kind.STRING) {
      throw new _error.GraphQLError('Can only validate strings as email addresses but got a: ' + ast.kind);
    }

    if (!EMAIL_ADDRESS_REGEX.test(ast.value)) {
      throw new TypeError('Value is not a valid email address: ' + ast.value);
    }

    return ast.value;
  }
});