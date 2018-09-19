'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _error = require('graphql/error');

var _language = require('graphql/language');

function RegularExpression(name, regex) {
  var REGEX = new RegExp(regex);

  return new _graphql.GraphQLScalarType({
    name: name,

    description: 'A field whose value matches the provided regular expression ' + regex + '.',

    serialize: function serialize(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Value is not string: ' + value);
      }

      if (!REGEX.test(value)) {
        throw new TypeError('Value does not match the regular expression ' + regex + ': ' + value);
      }

      return value;
    },
    parseValue: function parseValue(value) {
      if (typeof value !== 'string') {
        throw new TypeError('Value is not string: ' + value);
      }

      if (!REGEX.test(value)) {
        throw new TypeError('Value does not match the regular expression ' + regex + ': ' + value);
      }

      return value;
    },
    parseLiteral: function parseLiteral(ast) {
      if (ast.kind !== _language.Kind.STRING) {
        throw new _error.GraphQLError('Can only validate strings as regular expressions but got a: ' + ast.kind);
      }

      if (!REGEX.test(ast.value)) {
        throw new TypeError('Value does not match the regular expression ' + regex + ': ' + ast.value);
      }

      return ast.value;
    }
  });
}

exports.default = RegularExpression;