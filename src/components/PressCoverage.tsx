import React from 'react';
import styled from 'styled-components';

// Images
import FASTCO from '../assets/features/fast-company-logo.png';
import TNW from '../assets/features/the-next-web-logo.png';
import LIFEHACKER from '../assets/features/lifehacker-logo.png';
import BUSINESSINSIDER from '../assets/features/business-insider-logo.png';
import FORTUNE from '../assets/features/fortune-logo.png';
import GIZMODO from '../assets/features/gizmodo-logo.png';
import ARSTECHNICA from '../assets/features/ars-technica-logo.png';
import BGR from '../assets/features/bgr-logo.png';

const links = [
];

const Container = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  width: 1000px;
  max-width: 80%;
  margin: 0 auto;
  list-style-type: none;
  padding: 0;
`;

const Child = styled.li`
  flex: 0 0 25%;
  margin-top: 50px;
  @media screen and (max-width: 700px) {
    flex: 0 0 50%;
    margin-top: 50px;
  }
  img {
    max-width: 100%;
  }
  a {
    border: none;
  }
`;

const Press = styled.div`
  background-color: #e1e1e1;
  padding: 40px 0;
`;

const Title = styled.h4`
  font-size: 1.25em;
  margin: 0;
  text-align: center;
  font-weight: normal;
  text-transform: uppercase;
  @media screen and (max-width: 700px) {
    margin-bottom: 0;
  }
`;

export default () => (
  links.length > 0 ?
    <Press>
      <Title>As seen on</Title>
      <Container>
        {links.map(link => (
          <Child key={link.altText}>
            <a
              href={link.url}
              title={link.altText}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.imgSrc} alt={link.altText} />
            </a>
          </Child>
        ))}
      </Container>
    </Press>
    :
    <Press></Press>
);
