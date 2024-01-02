'use strict';

const designToken = require('..');
const assert = require('assert').strict;

assert.strictEqual(designToken(), 'Hello from designToken');
console.info('designToken tests passed');
