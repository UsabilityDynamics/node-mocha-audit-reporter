/*
 * mocha-audit-reporter
 * http://github.com/UsabilityDynamics/node-mocha-audit-reporter
 *
 * @class mocha-audit-reporter
 * @constructor
 * @version 0.1.0
 */
function Reporter( runner ) {

  var Base = require('mocha').reporters.Base;
  var List = require('mocha').reporters.List;

  var cursor = Base.cursor
  var color = Base.color
  var fs = require('fs')
  var filename = process.env.MOCHA_FILE || 'mocha.json';

  var tests = [];
  var failures = [];
  var passes = [];
  
  var self = this;

  Base.call(this, runner);

  runner.on('start', function(){
    console.log();
  });

  runner.on('test', function(test){
    process.stdout.write(color('pass', '    ' + test.fullTitle() + ': '));
  });

  runner.on('pending', function(test){
    var fmt = color('checkmark', '  -')
      + color('pending', ' %s');
    console.log(fmt, test.fullTitle());
  });

  runner.on('pass', function(test){
    var fmt = color('checkmark', '  '+Base.symbols.dot)
      + color('pass', ' %s: ')
      + color(test.speed, '%dms');
    cursor.CR();
    console.log(fmt, test.fullTitle(), test.duration);
  });

  runner.on('fail', function(test, err){
    cursor.CR();
    console.log(color('fail', '  %d) %s'), ++n, test.fullTitle());
  });

  //runner.on('end', self.epilogue.bind(self));


  runner.on('test end', function(test){
    tests.push(test);
  });

  runner.on('pass', function(test){
    passes.push(test);
  });

  runner.on('fail', function(test){
    failures.push(test);
  });

  runner.on('end', function(){
    var obj = {
      stats: self.stats,
      tests: tests.map(clean),
      failures: failures.map(clean),
      passes: passes.map(clean)
    };

    //process.stdout.write(JSON.stringify(obj, null, 2));
    
  });

  /**
   * Return a plain-object representation of `test`
   * free of cyclic properties etc.
   *
   * @param {Object} test
   * @return {Object}
   * @api private
   */

  function clean(test) {
    return {
      title: test.title,
      fullTitle: test.fullTitle(),
      duration: test.duration,
      err: test.err
    }
  }
  
}


/**
 * Instance Properties
 *
 */
Object.defineProperties( Reporter.prototype, {
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
Object.defineProperties( module.exports = Reporter, {
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