import styled from 'styled-components';

export const SearchContainer = styled.div`
  width: 500px;
  max-width: 95%;
  box-sizing: border-box;
  margin: 20px auto 10px auto;
`;

export const SearchBox = styled.input`
  font-size: 2em;
  @media screen and (max-width: 700px) {
    font-size: 1em;
  }
  border: none;
  height: 100%;
  display: block;
  width: 95%;
  background-color: transparent;
  border-bottom: 1px solid #cfcfcf;
  box-sizing: border-box;
  margin: 0 auto;
  outline: none;
  transition: all 100ms linear;
  font-weight: lighter;
  color: #FFF;

  ::-webkit-input-placeholder {
    /* Chrome/Opera/Safari */
    color: #cfcfcf;
    transition: all 100ms linear;
  }
  ::-moz-placeholder {
    /* Firefox 19+ */
    color: #cfcfcf;
    transition: all 100ms linear;
  }
  :-ms-input-placeholder {
    /* IE 10+ */
    color: #cfcfcf;
    transition: all 100ms linear;
  }
  :-moz-placeholder {
    /* Firefox 18- */
    color: #cfcfcf;
    transition: all 100ms linear;
  }

  &:hover,
  &:focus {
    border-bottom: 1px solid #cfcfcf;
    ::-webkit-input-placeholder {
      /* Chrome/Opera/Safari */
      color: #cfcfcf;
    }
    ::-moz-placeholder {
      /* Firefox 19+ */
      color: #cfcfcf;
    }
    :-ms-input-placeholder {
      /* IE 10+ */
      color: #cfcfcf;
    }
    :-moz-placeholder {
      /* Firefox 18- */
      color: #cfcfcf;
    }
  }
`;
