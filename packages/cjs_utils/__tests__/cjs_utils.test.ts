'use strict';

const utils = require('..');
const assert = require('assert').strict;

describe('@raoun/cjsUtils', () => {
  it('유틸이 Hello from cjsUtils를 반환할 것이다.', () => {
    assert.strictEqual(utils.cjsUtils(), 'Hello from cjsUtils');
  });
});
