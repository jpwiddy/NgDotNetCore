var isDevBuild = process.argv.indexOf('--env.prod') < 0;

// Polyfills

// Added parts of es6 which are necessary for your project or your browser support requirements.
import 'core-js/client/shim';
import 'zone.js';

// Typescript emit helpers polyfill
import 'ts-helpers';

if (isDevBuild) {
  // Development
  Error.stackTraceLimit = Infinity;

  /* tslint:disable no-var-requires */
  require('zone.js/dist/long-stack-trace-zone');
} else {
  // Production
}