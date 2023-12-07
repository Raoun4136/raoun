import * as utils from '../src/index';

describe('@raoun/utils', () => {
  it('유틸이 export 될 것이다.', () => {
    expect(utils).toBeTruthy();
  });
});

describe('@raoun/utils-formater', () => {
  it('핸드폰 번호에 하이픈을 추가한다', () => {
    expect(utils.phoneFormater('01012345678')).toBe('010-1234-5678');
    expect(utils.phoneFormater('0424813928')).toBe('042-481-3928');
  });
});
