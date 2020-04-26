import React from 'react';
import { shallow } from 'enzyme';

import Game from '../Game';

describe('<Game />', () => {
  it('render Board component', () => {
    const wrapper = shallow(<Game />);
    expect(wrapper.find('Board').length).toBe(1);
  });
});
