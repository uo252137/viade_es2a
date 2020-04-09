import React from 'react';
import { cleanup } from 'react-testing-library';
import RouteCreationPanel from './route-creation-panel.component';
import { shallow, mount, render } from 'enzyme';
import  Enzyme from 'enzyme';
import  Adapter  from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

afterAll(cleanup);

describe.only('Route Creation Panel tests', () => {

  const { container, rerender } = render(<RouteCreationPanel />);

  it('should render without crashing', () => {
    expect(container).toBeTruthy();
  });

});
