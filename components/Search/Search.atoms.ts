import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const SearchContainer = styled.div(() => css({
  boxSizing: 'border-box',
}));

export const SearchBox = styled.input(() => css({
  backgroundColor: 'transparent',
  border: 'none',
  borderBottom: '1px solid #cfcfcf',
  boxSizing: 'border-box',
  display: 'blcok',
  fontSize: '1.25em',
  fontWeight: 'lighter',
  height: '100%',
  margin: '0 auto',
  outline: 'none',
  transition: 'all 100ms linear',
  width: '100%',

  ['@media screen and (max-width: 700px)']: {
    fontSize: '1em',
  },

  ['::-webkit-input-placeholder']: {
    color: '#cfcfcf',
    transition: 'all 100ms linear',
  },

  ['::-moz-placeholder']: {
    color: '#cfcfcf',
    transition: 'all 100ms linear',
  },

  [':-ms-input-placeholder']: {
    color: '#cfcfcf',
    transition: 'all 100ms linear',
  },

  [':-moz-placeholder']: {
    color: '#cfcfcf',
    transition: 'all 100ms linear',
  },

  ['&:hover']: {
    ['::-webkit-input-placeholder']: {
      color: '#cfcfcf',
    },

    ['::-moz-placeholder']: {
      color: '#cfcfcf',
    },

    [':-ms-input-placeholder']: {
      color: '#cfcfcf',
    },

  },
  ['&:focus']: {

    ['::-webkit-input-placeholder']: {
      color: '#cfcfcf',
    },

    ['::-moz-placeholder']: {
      color: '#cfcfcf',
    },

    [':-ms-input-placeholder']: {
      color: '#cfcfcf',
    },

    [':-moz-placeholder']: {
      color: '#cfcfcf',
    },
  },
}));
