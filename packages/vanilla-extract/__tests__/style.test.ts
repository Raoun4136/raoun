import { definePrimaryProperty } from '../src/sprinkles.css';

describe('@raoun/vanilla-extract', () => {
  it('vanilla export 될 것이다.', () => {
    expect(definePrimaryProperty).toBeDefined();
    expect(
      definePrimaryProperty({
        object: {
          10: 'red',
          20: 'blue',
          30: 'green',
          40: 'orange',
          50: 'purple',
          60: 'pink',
          70: 'yellow',
          80: 'black',
          90: 'white',
          100: 'gray',
        },
      })
    ).toBe('sw');
  });
});
