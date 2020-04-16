import React from 'react';
import { shallow } from 'enzyme';
import { SearchBox } from '../../src/components/Search.atoms';
import Search from '../../src/components/Search';

describe('Search Component', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Search search={jest.fn()} />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('typing in the SearchBox properly updates state and invokes callback function', () => {
    const searchSpy = jest.fn();
    const wrapper = shallow(
      <Search search={searchSpy} />,
    );
    const event = { target: { value: 'hello' } };

    wrapper.find(SearchBox).simulate('change', event);
    expect(wrapper.state('inputValue')).toEqual('hello');
    expect(searchSpy).toHaveBeenCalledWith('hello');
  });
});
