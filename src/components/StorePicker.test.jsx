import React from 'react';
import Enzyme from 'enzyme';
import sinon from 'sinon';
import StorePicker from './StorePicker';

const shallow = Enzyme.shallow;
const spy = sinon.spy;
const stub = sinon.stub;

describe('StorePicker', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<StorePicker />);
  });

  afterEach(() => {
    wrapper = null;
  });

  it('Should stop the form from submitting', () => {
    const preventDefaultSpy = spy()
    const event = {
      preventDefault: preventDefaultSpy
    }
    wrapper.instance().goToStore(event)
    wrapper.find('button').simulate('click')
    expect(preventDefaultSpy.callCount).toEqual(1);
  });

});
