import React from 'react';
import { cleanup } from 'react-testing-library';
import EditFields from './edit-fields.component';

import 'jest-dom/extend-expect';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

const friends = [
  'https://marcosav.inrupt.net/profile/card#me',
  'https://marcosav2.inrupt.net/profile/card#me'
];

const groups = [
  {
    id: 'testid',
    name: "Grupo A",
    members: ["https://marcosav2.inrupt.net/profile/card"],
    date: 1529644667834,
    owner: 'https://marcosav.inrupt.net/profile/card#me'
  }
];

describe('EditFields', () => {
  afterAll(cleanup);

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <EditFields {...{ webId: friends[0], selectedGroup: groups[0] }} />
    );
  });

  it('renders without crashing', () => {
    expect(wrapper).toBeTruthy();
  });
});
