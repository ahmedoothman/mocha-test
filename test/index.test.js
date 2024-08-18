import * as chai from 'chai';
let { assert, expect } = chai;
chai.should();

import * as code from '../index.js';
// Problem 1
describe('capitalizeText', () => {
  console.log(code.capitalizeText('hamada'));
  it('should return capitalized string for valid input', () => {
    expect(code.capitalizeText('hamada')).to.equal('HAMADA');
    assert.equal(code.capitalizeText('hamada'), 'HAMADA');
    code.capitalizeText('hamada').should.equal('HAMADA');
  });

  it('should return an empty string for non-string input', () => {
    expect(() => code.capitalizeText(12)).to.throw(
      TypeError,
      'parameter should be string'
    );
    assert.throws(
      () => code.capitalizeText(12),
      TypeError,
      'parameter should be string'
    );
    (() => code.capitalizeText(12)).should.throw(
      TypeError,
      'parameter should be string'
    );
  });

  it('should accept only one parameter', () => {
    expect(() => code.capitalizeText('hamada', 'extra')).to.throw();
    assert.throws(() => code.capitalizeText('hamada', 'extra'));
    (() => code.capitalizeText('hamada', 'extra')).should.throw();
  });
});

// Problem 2
describe('createArray', () => {
  it('should return an array', () => {
    expect(code.createArray(3)).to.be.an('array');
    assert.isArray(code.createArray(3));
    code.createArray(3).should.be.an('array');
  });

  it('should return an array of the correct length and contents', () => {
    expect(code.createArray(3)).to.have.lengthOf(3).that.include(1);
    assert.lengthOf(code.createArray(3), 3);
    assert.include(code.createArray(3), 1);
    code.createArray(3).should.have.lengthOf(3).and.include(1);
  });
});

// Problem 3
describe('Object equality', () => {
  it('should check if obj1 and obj2 are equal', () => {
    expect(code.obj1).to.not.equal(code.obj2);
    expect(code.obj1).to.deep.equal(code.obj2);
    assert.notEqual(code.obj1, code.obj2);
    assert.deepEqual(code.obj1, code.obj2);
  });
});

// Problem 4
describe('CheckPositivity', () => {
  it('should return true for positive numbers', () => {
    expect(code.CheckPositivity(4)).to.be.true;
    assert.isTrue(code.CheckPositivity(4));
    code.CheckPositivity(4).should.be.true;
  });

  it('should return false for negative numbers', () => {
    expect(code.CheckPositivity(-1)).to.be.false;
    assert.isFalse(code.CheckPositivity(-1));
    code.CheckPositivity(-1).should.be.false;
  });

  it('should return false for zero', () => {
    expect(code.CheckPositivity(0)).to.be.false;
    assert.isFalse(code.CheckPositivity(0));
    code.CheckPositivity(0).should.be.false;
  });
});

// Problem 5
describe('Mult', () => {
  it('should ensure x > 0', () => {
    expect(() => code.Mult(0)).to.throw();
    assert.throws(() => code.Mult(0));
    (() => code.Mult(0)).should.throw();
  });

  it('should return a number greater than zero', () => {
    expect(code.Mult(2)).to.be.above(0);
    assert.isAbove(code.Mult(2), 0);
    code.Mult(2).should.be.above(0);
  });
});

// Problem 6
describe('obj3', () => {
  it('should check if obj3 contains {x: 1}', () => {
    expect(code.obj3).to.not.have.deep.property('a.b[0]', { x: 1 });
    assert.notDeepPropertyVal(code.obj3, 'a.b[0]', { x: 1 });
    code.obj3.should.not.have.deep.property('a.b[0]', { x: 1 });
  });
});
