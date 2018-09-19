'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _error = require('graphql/error');

var _language = require('graphql/language');

// see https://gist.github.com/dperini/729294
var URL_REGEX = new RegExp(/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$|^https?:\/\/localhost.*/i);

exports.default = new _graphql.GraphQLScalarType({
  name: 'URL',

  description: 'A field whose value conforms to the standard URL format as specified in RFC3986: https://www.ietf.org/rfc/rfc3986.txt.',

  serialize: function serialize(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Value is not string: ' + value);
    }

    if (!URL_REGEX.test(value)) {
      throw new TypeError('Value is not a valid URL: ' + value);
    }

    return value;
  },
  parseValue: function parseValue(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Value is not string: ' + value);
    }

    if (!URL_REGEX.test(value)) {
      throw new TypeError('Value is not a valid URL: ' + value);
    }

    return value;
  },
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind !== _language.Kind.STRING) {
      throw new _error.GraphQLError('Can only validate strings as URLs but got a: ' + ast.kind);
    }

    if (!URL_REGEX.test(ast.value)) {
      throw new TypeError('Value is not a valid URL: ' + ast.value);
    }

    return ast.value;
  }
});