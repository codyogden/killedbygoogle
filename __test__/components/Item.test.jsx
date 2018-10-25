import React from 'react';
import { shallow, mount } from 'enzyme';
import Item from '../../src/components/Item';
import { willDieInFuture, diedInPast } from '../fixtures/graveyard.jsx';
import { Themes, getCurrentTheme } from '../helpers/themesHelper.jsx';

let currentTheme;

describe('Items with death dates (dateClose) in the past', () => {
    test('should render Icon image with tombstone of the current theme', () => {
        currentTheme = getCurrentTheme();
        const wrapper = mount(<Item {...diedInPast[1]} />);
        expect(wrapper.find("IconContainer").childAt(0).find("Icon").prop("src")).toEqual(currentTheme.tombstone.src);
        expect(wrapper.find("IconContainer").childAt(0).find("Icon").prop("alt")).toEqual(currentTheme.tombstone.alt);

    });
});

describe('Items with death dates (dateClose) in the future', () => {
    test('should render Icon image with guillotine of the current theme', () => {
        currentTheme = getCurrentTheme();
        const wrapper = mount(<Item {...willDieInFuture[0]} />);    
        expect(wrapper.find("IconContainer").childAt(0).find("Icon").prop("src")).toEqual(currentTheme.guillotine.src);
        expect(wrapper.find("IconContainer").childAt(0).find("Icon").prop("alt")).toEqual(currentTheme.guillotine.alt);
    });
});