import 'mocha ';
import { assert } from 'chai';

import { HelloWorld, GoodBye } from '../src/index';
import npmPackage from '../src/index';

describe('NPM Package', () => {
  it('should be an object', () => {
    assert.isObject(npmPackage);
  });

  it('should have a helloWorld property', () => {
    assert.property(npmPackage, 'helloWorld');
  });
});

describe('Hello World Function', () => {
  it('should be a function', () => {
    assert.isFunction(HelloWorld);
  });

  it('should return the hello world message', () => {
    const expected = 'Hello World from my example modern npm package!';
    const actual = HelloWorld();
    assert.equal(actual, expected);
  });
});

describe('Goodbye Function', () => {
  it('should be a function', () => {
    assert.isFunction(GoodBye);
  });

  it('should return the goodbye message', () => {
    const expected = 'Goodbye from my example modern npm package!';
    const actual = GoodBye();
    assert.equal(actual, expected);
  });
  
});