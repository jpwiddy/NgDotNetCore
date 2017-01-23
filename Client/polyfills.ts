//TODO: var isDevBuild

// Polyfills

// Added parts of es6 which are necessary for your project or your browser support requirements.
import 'core-js/client/shim';
import 'zone.js/dist/zone';
import 'reflect-metadata';

// Typescript emit helpers polyfill
import 'ts-helpers';

// TODO:
//if (isDevBuild) {
//  // Development
//  Error.stackTraceLimit = Infinity;

//  /* tslint:disable no-var-requires */
//  require('zone.js/dist/long-stack-trace-zone');
//} else {
//  // Production
//}