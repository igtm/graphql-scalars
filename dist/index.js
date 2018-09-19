'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.URLScalar = exports.UnsignedIntScalar = exports.UnsignedFloatScalar = exports.RegularExpressionScalar = exports.PostalCodeScalar = exports.PositiveIntScalar = exports.PositiveFloatScalar = exports.PhoneNumberScalar = exports.NonPositiveIntScalar = exports.NonPositiveFloatScalar = exports.NonNegativeIntScalar = exports.NonNegativeFloatScalar = exports.NegativeIntScalar = exports.NegativeFloatScalar = exports.EmailAddressScalar = exports.DateTimeScalar = exports.RegularExpression = exports.PostalCode = exports.PhoneNumber = exports.URL = exports.EmailAddress = exports.NegativeFloat = exports.UnsignedFloat = exports.NonNegativeFloat = exports.PositiveFloat = exports.NonPositiveFloat = exports.NegativeInt = exports.UnsignedInt = exports.NonNegativeInt = exports.PositiveInt = exports.NonPositiveInt = exports.DateTime = exports.OKGScalarDefinitions = undefined;

var _scalars = require('./scalars');

Object.defineProperty(exports, 'OKGScalarDefinitions', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_scalars).default;
  }
});

var _DateTime = require('./DateTime');

var _DateTime2 = _interopRequireDefault(_DateTime);

var _NonPositiveInt = require('./NonPositiveInt');

var _NonPositiveInt2 = _interopRequireDefault(_NonPositiveInt);

var _PositiveInt = require('./PositiveInt');

var _PositiveInt2 = _interopRequireDefault(_PositiveInt);

var _NonNegativeInt = require('./NonNegativeInt');

var _NonNegativeInt2 = _interopRequireDefault(_NonNegativeInt);

var _NegativeInt = require('./NegativeInt');

var _NegativeInt2 = _interopRequireDefault(_NegativeInt);

var _NonPositiveFloat = require('./NonPositiveFloat');

var _NonPositiveFloat2 = _interopRequireDefault(_NonPositiveFloat);

var _PositiveFloat = require('./PositiveFloat');

var _PositiveFloat2 = _interopRequireDefault(_PositiveFloat);

var _NonNegativeFloat = require('./NonNegativeFloat');

var _NonNegativeFloat2 = _interopRequireDefault(_NonNegativeFloat);

var _NegativeFloat = require('./NegativeFloat');

var _NegativeFloat2 = _interopRequireDefault(_NegativeFloat);

var _EmailAddress = require('./EmailAddress');

var _EmailAddress2 = _interopRequireDefault(_EmailAddress);

var _URL = require('./URL');

var _URL2 = _interopRequireDefault(_URL);

var _PhoneNumber = require('./PhoneNumber');

var _PhoneNumber2 = _interopRequireDefault(_PhoneNumber);

var _PostalCode = require('./PostalCode');

var _PostalCode2 = _interopRequireDefault(_PostalCode);

var _RegularExpression = require('./RegularExpression');

var _RegularExpression2 = _interopRequireDefault(_RegularExpression);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.DateTime = _DateTime2.default;
exports.NonPositiveInt = _NonPositiveInt2.default;
exports.PositiveInt = _PositiveInt2.default;
exports.NonNegativeInt = _NonNegativeInt2.default;
exports.UnsignedInt = _NonNegativeInt2.default;
exports.NegativeInt = _NegativeInt2.default;
exports.NonPositiveFloat = _NonPositiveFloat2.default;
exports.PositiveFloat = _PositiveFloat2.default;
exports.NonNegativeFloat = _NonNegativeFloat2.default;
exports.UnsignedFloat = _NonNegativeFloat2.default;
exports.NegativeFloat = _NegativeFloat2.default;
exports.EmailAddress = _EmailAddress2.default;
exports.URL = _URL2.default;
exports.PhoneNumber = _PhoneNumber2.default;
exports.PostalCode = _PostalCode2.default;
exports.RegularExpression = _RegularExpression2.default;
exports.DateTimeScalar = _scalars.DateTimeScalar;
exports.EmailAddressScalar = _scalars.EmailAddressScalar;
exports.NegativeFloatScalar = _scalars.NegativeFloatScalar;
exports.NegativeIntScalar = _scalars.NegativeIntScalar;
exports.NonNegativeFloatScalar = _scalars.NonNegativeFloatScalar;
exports.NonNegativeIntScalar = _scalars.NonNegativeIntScalar;
exports.NonPositiveFloatScalar = _scalars.NonPositiveFloatScalar;
exports.NonPositiveIntScalar = _scalars.NonPositiveIntScalar;
exports.PhoneNumberScalar = _scalars.PhoneNumberScalar;
exports.PositiveFloatScalar = _scalars.PositiveFloatScalar;
exports.PositiveIntScalar = _scalars.PositiveIntScalar;
exports.PostalCodeScalar = _scalars.PostalCodeScalar;
exports.RegularExpressionScalar = _scalars.RegularExpressionScalar;
exports.UnsignedFloatScalar = _scalars.UnsignedFloatScalar;
exports.UnsignedIntScalar = _scalars.UnsignedIntScalar;
exports.URLScalar = _scalars.URLScalar;
exports.default = {
  // as part of a default object
  DateTime: _DateTime2.default,
  PositiveInt: _PositiveInt2.default,
  NonNegativeInt: _NonNegativeInt2.default,
  UnsignedInt: _NonNegativeInt2.default,
  NegativeInt: _NegativeInt2.default,
  PositiveFloat: _PositiveFloat2.default,
  NonNegativeFloat: _NonNegativeFloat2.default,
  UnsignedFloat: _NonNegativeFloat2.default,
  NegativeFloat: _NegativeFloat2.default,
  EmailAddress: _EmailAddress2.default,
  URL: _URL2.default,
  PhoneNumber: _PhoneNumber2.default,
  PostalCode: _PostalCode2.default,
  RegularExpression: _RegularExpression2.default
};