import React from 'react';
import { cleanup } from 'react-testing-library';
import AddFriend from './add-friend.component';

import 'jest-dom/extend-expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('AddFriend', () => {
  afterAll(cleanup);

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <AddFriend />
    );
  });

  it('renders on creation', () => {
    expect(wrapper.find('.addpanel')).toBeDefined();
    expect(wrapper.find('.addcard')).toBeDefined();
    expect(wrapper.find('.add-friend-button')).toBeDefined();

    expect(wrapper.find('.add-friend-button')).toHaveLength(0);
  });

});
