import { shallow } from 'enzyme';
import React from 'react';
import Search from '../../src/components/Search';

describe('Search Component', () => {
  it('Matches snapshot', () => {
    const wrapper = shallow(
      <Search search={jest.fn()} />,
    );
    expect(wrapper).toMatchSnapshot();
  });
});
