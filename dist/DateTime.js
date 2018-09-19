'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _error = require('graphql/error');

var _language = require('graphql/language');

exports.default = new _graphql.GraphQLScalarType({
  name: 'DateTime',

  description: 'Use JavaScript Date object for date/time fields.',

  serialize: function serialize(value) {
    var v = value;

    if (!(v instanceof Date) && typeof v !== 'string') {
      throw new TypeError('Value is not an instance of Date or Date string: ' + v);
    }

    if (typeof v === 'string') {
      v = new Date();

      v.setTime(Date.parse(value));
    }

    // eslint-disable-next-line no-restricted-globals
    if (Number.isNaN(v.getTime())) {
      throw new TypeError('Value is not a valid Date: ' + v);
    }

    return v.toJSON();
  },
  parseValue: function parseValue(value) {
    var date = new Date(value);

    // eslint-disable-next-line no-restricted-globals
    if (Number.isNaN(date.getTime())) {
      throw new TypeError('Value is not a valid Date: ' + value);
    }

    return date;
  },
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind !== _language.Kind.STRING) {
      throw new _error.GraphQLError('Can only parse strings to dates but got a: ' + ast.kind);
    }

    var result = new Date(ast.value);

    // eslint-disable-next-line no-restricted-globals
    if (Number.isNaN(result.getTime())) {
      throw new _error.GraphQLError('Value is not a valid Date: ' + ast.value);
    }

    if (ast.value !== result.toJSON()) {
      throw new _error.GraphQLError('Value is not a valid Date format (YYYY-MM-DDTHH:MM:SS.SSSZ): ' + ast.value);
    }

    return result;
  }
});