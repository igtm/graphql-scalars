'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _graphql = require('graphql');

var _error = require('graphql/error');

var _language = require('graphql/language');

// We're going to start with a limited set as suggested here:
// http://www.pixelenvision.com/1708/zip-postal-code-validation-regex-php-code-for-12-countries/
// and here:
// https://stackoverflow.com/questions/578406/what-is-the-ultimate-postal-code-and-zip-regex
//
// Which gives us the following countries:
//
// US - United States
// UK - United Kingdom
// DE - Germany
// CA - Canada
// FR - France
// IT - Italy
// AU - Australia
// NL - Netherlands
// ES - Spain
// DK - Denmark
// SE - Sweden
// BE - Belgium
// IN - India
//
// This is really a practical decision of weight (of the package) vs. completeness.
//
// In the future we might expand this list and use the more comprehensive list found here:
// http://unicode.org/cldr/trac/browser/tags/release-26-0-1/common/supplemental/postalCodeData.xml

// prettier-ignore
var POSTAL_CODE_REGEXES = [
/* US */new RegExp(/^\d{5}([-]?\d{4})?$/),
/* UK */new RegExp(/^(GIR|[A-Z]\d[A-Z\d]??|[A-Z]{2}\d[A-Z\d]??)[ ]??(\d[A-Z]{2})$/),
/* DE */new RegExp(/\b((?:0[1-46-9]\d{3})|(?:[1-357-9]\d{4})|(?:[4][0-24-9]\d{3})|(?:[6][013-9]\d{3}))\b/),
/* CA */new RegExp(/^([ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVWXYZ]) {0,1}(\d[ABCEGHJKLMNPRSTVWXYZ]\d)$/),
/* FR */new RegExp(/^(F-)?((2[A|B])|[0-9]{2})[0-9]{3}$/),
/* IT */new RegExp(/^(V-|I-)?[0-9]{5}$/),
/* AU */new RegExp(/^(0[289][0-9]{2})|([1345689][0-9]{3})|(2[0-8][0-9]{2})|(290[0-9])|(291[0-4])|(7[0-4][0-9]{2})|(7[8-9][0-9]{2})$/),
/* NL */new RegExp(/^[1-9][0-9]{3}\s?([a-zA-Z]{2})?$/),
/* ES */new RegExp(/^([1-9]{2}|[0-9][1-9]|[1-9][0-9])[0-9]{3}$/),
/* DK */new RegExp(/^([D|d][K|k]( |-))?[1-9]{1}[0-9]{3}$/),
/* SE */new RegExp(/^(s-|S-){0,1}[0-9]{3}\s?[0-9]{2}$/),
/* BE */new RegExp(/^[1-9]{1}[0-9]{3}$/),
/* IN */new RegExp(/^\d{6}$/)];

function _testPostalCode(postalCode) {
  var result = false;

  // eslint-disable-next-line no-plusplus
  for (var i = 0; i < POSTAL_CODE_REGEXES.length; i++) {
    var regex = POSTAL_CODE_REGEXES[i];

    if (regex.test(postalCode)) {
      result = true;
      break;
    }
  }

  return result;
}

exports.default = new _graphql.GraphQLScalarType({
  name: 'PostalCode',

  description: 'A field whose value conforms to the standard postal code formats for United States, United Kingdom, Germany, Canada, France, Italy, Australia, Netherlands, Spain, Denmark, Sweden, Belgium or India.',

  serialize: function serialize(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Value is not string: ' + value);
    }

    if (!_testPostalCode(value)) {
      throw new TypeError('Value is not a valid postal code: ' + value);
    }

    return value;
  },
  parseValue: function parseValue(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Value is not string: ' + value);
    }

    if (!_testPostalCode(value)) {
      throw new TypeError('Value is not a valid postal code: ' + value);
    }

    return value;
  },
  parseLiteral: function parseLiteral(ast) {
    if (ast.kind !== _language.Kind.STRING) {
      throw new _error.GraphQLError('Can only validate strings as phone numbers but got a: ' + ast.kind);
    }

    if (!_testPostalCode(ast.value)) {
      throw new TypeError('Value is not a valid postal code: ' + ast.value);
    }

    return ast.value;
  }
});