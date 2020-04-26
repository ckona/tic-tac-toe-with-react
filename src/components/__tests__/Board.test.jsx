import React from 'react';
import { shallow } from 'enzyme';

import Board from '../Board';

describe('<Board />', () => {
  const props = {
    squares: [{squares: Array(9).fill(null)}],
    onClick: jest.fn()
  };

  it('render Square components', () => {
    const wrapper = shallow(<Board {...props} />);
    expect(wrapper.find('Square').length).toBe(9);
  });
});
