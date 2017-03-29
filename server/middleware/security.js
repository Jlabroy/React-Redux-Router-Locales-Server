const csp = require("helmet-csp");
const helmet = require("helmet");
const hpp = require("hpp");

module.exports = [
  /**
   * Content security poilicy directives
   * @type {Object}
   */
  // csp({
  //   directives: {
  //     defaultSrc: ["'self'"],
  //     styleSrc: ["'self'", "'unsafe-inline'"],
  //     imgSrc: ["'self'", 'data:'],
  //     sandbox: ['allow-forms', 'allow-scripts'],
  //     reportUri: '/report-violation',
  //     objectSrc: ["'none'"]
  //   }
  // }),

  /**
   * Helmet
   * Cleans up the server headers
   */
  helmet(),

  /**
   * HPP
   * Protects against HTTP Parameter Pollution attacks
   */
  hpp()
];
