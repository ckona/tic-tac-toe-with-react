import React from 'react';
import { shallow } from 'enzyme';

import Square from '../Square';

describe('<Square />', () => {
  const propsValue = 'sample text';
  const onClickFunction = jest.fn();
  const props = {
    value: propsValue,
    onClick: onClickFunction,
  };
  const wrapper = shallow(<Square {...props} />);

  it('text is equal props value.', () => {
    expect(wrapper.text()).toEqual(propsValue);
  });

  it('when click, onClick function is called.', () => {
    wrapper.simulate('click');
    expect(onClickFunction).toBeCalled();
  });
});
