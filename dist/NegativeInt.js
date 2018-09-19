'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _error = require('graphql/error');

var _language = require('graphql/language');

var _utilities = require('./utilities');

exports.default = new _graphql.GraphQLScalarType({
  name: 'NegativeInt',

  description: 'Integers that will have a value less than 0.',

  serialize: function serialize(value) {
    return (0, _utilities.processValue)(value, _utilities.VALIDATIONS.NegativeInt);
  },
  parseValue: function parseValue(value) {
    return (0, _utilities.processValue)(value, _utilities.VALIDATIONS.NegativeInt);
  },
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind !== _language.Kind.INT) {
      throw new _error.GraphQLError('Can only validate integers as negative integers but got a: ' + ast.kind);
    }

    return (0, _utilities.processValue)(ast.value, _utilities.VALIDATIONS.NegativeInt);
  }
});