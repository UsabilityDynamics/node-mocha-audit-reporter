/*
 * mocha-audit-reporter
 * http://github.com/UsabilityDynamics/node-mocha-audit-reporter
 *
 * @class mocha-audit-reporter
 * @constructor
 * @version 0.1.0
 */
function Module() {

  // Force new instance.
  if( !( this instanceof Module ) ) {
    return new Module( arguments[0], arguments[1] );
  }

  var settings  = 'object' === typeof arguments[0] ? arguments[0] : {};
  var callback  = 'function' === typeof arguments[1] ? arguments[1] : Module.utility.noop;
  var self      = this;

  // @chainable
  return this;

}

/**
 * Instance Properties
 *
 */
Object.defineProperties( Module.prototype, {
  some_action: {
    /**
     * Some Actions
     *
     * @for mocha-audit-reporter
     */
    value: function some_action() {},
    enumerable: true,
    configurable: true,
    writable: true
  }
});

/**
 * Constructor Properties
 *
 */
Object.defineProperties( module.exports = Module, {
  utility: {
    value: require( './utility' ),
    enumerable: false,
    writable: false
  },
  create: {
    /**
     * Create Instance
     *
     * @for mocha-audit-reporter
     */
    value: function create() {},
    enumerable: true,
    configurable: true,
    writable: true
  }
});