'use strict';

const packageCli = require('..');
const assert = require('assert').strict;

assert.strictEqual(packageCli(), 'Hello from packageCli');
console.info('packageCli tests passed');
